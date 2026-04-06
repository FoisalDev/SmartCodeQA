import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { CursorProvider } from '@/components/CursorProvider';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
	display: 'swap',
	preload: true
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
	preload: true
});

export const metadata: Metadata = {
	metadataBase: new URL('https://smartcodeqa.com'),
	title: {
		default: 'SmartCodeQA - QA Testing, AI Integration & Software Development Agency',
		template: '%s | SmartCodeQA'
	},
	description:
		'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, test automation, AI integrations, mobile development, web development, and emerging technology solutions. 80+ clients trust us worldwide.',
	keywords: [
		'QA testing agency',
		'software testing services',
		'automation testing',
		'mobile app testing company',
		'web QA services',
		'AI integration agency',
		'web development agency',
		'blockchain QA',
		'quality assurance',
		'test automation',
		'SmartCodeQA',
		'software development agency',
		'mobile app development',
		'AI integration services'
	],
	authors: [{ name: 'SmartCodeQA', url: 'https://smartcodeqa.com' }],
	creator: 'SmartCodeQA',
	publisher: 'SmartCodeQA',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	icons: {
		icon: [
			{ url: '/images/fav.svg', type: 'image/svg+xml' },
			{ url: '/images/fav.ico' }
		],
		apple: '/images/fav.svg',
		shortcut: '/images/fav.svg'
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://smartcodeqa.com',
		siteName: 'SmartCodeQA',
		title: 'SmartCodeQA - QA Testing, AI Integration & Software Development Agency',
		description:
			'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, test automation, AI integrations, mobile development, web development, and emerging technology solutions.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'SmartCodeQA - Your Partner in Quality Assurance & Emerging Technologies'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SmartCodeQA - QA Testing, AI Integration & Software Development Agency',
		description:
			'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, test automation, AI integrations, mobile development, web development, and emerging technology solutions.',
		images: ['/og-image.png'],
		creator: '@smartcodeqa'
	},
	alternates: {
		canonical: 'https://smartcodeqa.com'
	},
	verification: {
		google: 'your-google-verification-code'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'SmartCodeQA',
		url: 'https://smartcodeqa.com',
		logo: 'https://smartcodeqa.com/images/logo.png',
		description: 'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, automation, AI integrations, mobile development, web development, and emerging technology solutions.',
		email: 'info@smartcodeqa.com',
		telephone: '+8801718192949',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Bogura',
			addressRegion: 'Sherpur',
			addressCountry: 'BD'
		},
		sameAs: [
			'https://www.facebook.com/profile.php?id=61586378348423',
			'https://www.linkedin.com/company/smartcodeqa/'
		],
		knowsAbout: [
			'Quality Assurance',
			'Test Automation',
			'AI Integration',
			'Web Development',
			'Mobile Development',
			'Blockchain',
			'Desktop Applications'
		]
	};

	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'SmartCodeQA',
		url: 'https://smartcodeqa.com',
		description: 'SmartCodeQA - Your Partner in Quality Assurance & Emerging Technologies',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://smartcodeqa.com/services',
			'query-input': 'required name=search_term_string'
		}
	};

	return (
		<html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
				/>
			</head>
			<body className="min-h-screen bg-background overflow-x-hidden antialiased">
				<CursorProvider />
				{children}
			</body>
		</html>
	);
}
