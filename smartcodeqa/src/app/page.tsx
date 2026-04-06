import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { AboutPreview } from '@/components/AboutPreview';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ProcessSection } from '@/components/ProcessSection';
import { MetricsSection } from '@/components/MetricsSection';
import { ProjectsPreview } from '@/components/ProjectsPreview';
import { TeamPreview } from '@/components/TeamPreview';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { HomeBackground } from '@/components/backgrounds';

export const metadata: Metadata = {
	title: 'SmartCodeQA - QA Testing, AI Integration & Software Development',
	description:
		'SmartCodeQA helps startups and growing businesses deliver reliable digital products through QA engineering, test automation, AI integrations, mobile development, web development, and emerging technology solutions. 80+ clients trust us worldwide.',
	alternates: {
		canonical: 'https://smartcodeqa.com'
	}
};

export default function HomePage() {
	return (
		<>
			<HomeBackground />
			<Navbar />
			<main className="relative z-10">
				<HeroSection />
				<TrustStrip />
				<AboutPreview />
				<ServicesGrid />
				<WhyChooseUs />
				<ProcessSection />
				<MetricsSection />
				<ProjectsPreview />
				<TeamPreview />
				<CTASection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
