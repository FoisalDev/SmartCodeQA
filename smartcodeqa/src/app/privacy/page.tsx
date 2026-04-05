import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'SmartCodeQA Privacy Policy'
};

export default function PrivacyPage() {
	return (
		<>
			<Navbar />
			<main className="pt-32 pb-20">
				<div className="container-custom max-w-3xl">
					<h1 className="heading-xl mb-8">Privacy Policy</h1>
					<div className="prose prose-invert max-w-none">
						<p className="text-text-secondary">Last updated: April 2026</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
						<p className="text-text-secondary">
							We collect information you provide through our contact form, including your name, email address, company name, and message content.
						</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
						<p className="text-text-secondary">
							We use the information you provide to respond to your inquiries and communicate with you about our services.
						</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Data Protection</h2>
						<p className="text-text-secondary">
							We implement appropriate security measures to protect your personal information.
						</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
						<p className="text-text-secondary">
							If you have questions about this privacy policy, please contact us at info@smartcodeqa.com.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
