import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { CursorProvider } from '@/components/CursorProvider';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
	display: 'swap'
});

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
});

export const metadata: Metadata = {
	metadataBase: new URL('https://smartcodeqa.com'),
	title: {
		default: 'SmartCodeQA - Your Partner in Quality Assurance & Emerging Technologies',
		template: '%s | SmartCodeQA'
	},
	description:
		'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, automation, AI integrations, mobile development, web development, and emerging technology solutions.',
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
		'test automation'
	],
	authors: [{ name: 'SmartCodeQA' }],
	creator: 'SmartCodeQA',
	publisher: 'SmartCodeQA',
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
		title: 'SmartCodeQA - Your Partner in Quality Assurance & Emerging Technologies',
		description:
			'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, automation, AI integrations, mobile development, web development, and emerging technology solutions.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'SmartCodeQA'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SmartCodeQA - Your Partner in Quality Assurance & Emerging Technologies',
		description:
			'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, automation, AI integrations, mobile development, web development, and emerging technology solutions.',
		images: ['/og-image.png'],
		creator: '@smartcodeqa'
	},
	alternates: {
		canonical: 'https://smartcodeqa.com'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
			<body className="min-h-screen bg-background overflow-x-hidden">
				<CursorProvider />
				{children}
			</body>
		</html>
	);
}
