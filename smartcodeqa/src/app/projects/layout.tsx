import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Our Projects - QA Testing & Software Development Portfolio',
	description:
		'Explore SmartCodeQA portfolio of successful projects across QA testing, mobile app testing, AI QA, automation testing, and more. See how we help businesses deliver quality.',
	alternates: {
		canonical: 'https://smartcodeqa.com/projects'
	}
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
