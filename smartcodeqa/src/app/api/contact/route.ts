import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_REQUEST_SIZE = 10000;

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const windowMs = 60 * 1000;
	const maxRequests = 5;

	const record = requestCounts.get(ip);

	if (!record || now > record.resetTime) {
		requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
		return true;
	}

	if (record.count >= maxRequests) {
		return false;
	}

	record.count++;
	return true;
}

export async function POST(request: Request) {
	try {
		const contentLength = request.headers.get('content-length');
		if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
			return NextResponse.json(
				{ error: 'Request too large' },
				{ status: 413 }
			);
		}

		const origin = request.headers.get('origin');
		if (origin && !origin.includes('localhost') && !origin.includes('smartcodeqa.com')) {
			return NextResponse.json(
				{ error: 'Forbidden' },
				{ status: 403 }
			);
		}

		const forwarded = request.headers.get('x-forwarded-for');
		const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

		if (!checkRateLimit(ip)) {
			return NextResponse.json(
				{ error: 'Too many requests. Please try again later.' },
				{ status: 429 }
			);
		}

		const body = await request.json();
		const { name, email, company, service, message, _honeypot } = body;

		if (_honeypot) {
			return NextResponse.json(
				{ error: 'Forbidden' },
				{ status: 403 }
			);
		}

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'Name, email, and message are required' },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: 'Invalid email format' },
				{ status: 400 }
			);
		}

		const safeName = escapeHtml(name.trim());
		const safeEmail = escapeHtml(email.trim());
		const safeCompany = company ? escapeHtml(company.trim()) : 'Not provided';
		const safeService = service ? escapeHtml(service.trim()) : 'Not specified';
		const safeMessage = escapeHtml(message.trim());

		const htmlContent = `
			<h2>New Contact Form Submission</h2>
			<p><strong>Name:</strong> ${safeName}</p>
			<p><strong>Email:</strong> ${safeEmail}</p>
			<p><strong>Company:</strong> ${safeCompany}</p>
			<p><strong>Service Needed:</strong> ${safeService}</p>
			<p><strong>Message:</strong></p>
			<p>${safeMessage.replace(/\n/g, '<br>')}</p>
			<hr>
			<p><em>This message was sent from SmartCodeQA website contact form.</em></p>
		`;

		const { data, error } = await resend.emails.send({
			from: 'SmartCodeQA Contact <onboarding@resend.dev>',
			to: ['info@smartcodeqa.com'],
			subject: `New Contact: ${safeName} - ${safeService || 'General Inquiry'}`,
			html: htmlContent,
			replyTo: email.trim(),
		});

		if (error) {
			console.error('Resend error:', error);
			return NextResponse.json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}

		return NextResponse.json({ success: true, messageId: data?.id });
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
