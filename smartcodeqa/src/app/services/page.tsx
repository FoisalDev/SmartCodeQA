import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { CTASection } from '@/components/CTASection';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ServicesBackground } from '@/components/backgrounds';
import { services } from '@/data';
import { Shield, Brain, Smartphone, Globe, Blocks, Monitor } from 'lucide-react';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
	title: 'Our Services - QA Testing, AI Integration, Web & Mobile Development',
	description:
		'Explore SmartCodeQA comprehensive services including QA Testing, AI Apps & Integrations, Mobile Development, Web Development, Blockchain solutions, and Desktop Applications. End-to-end solutions tailored to your business.',
	alternates: {
		canonical: 'https://smartcodeqa.com/services'
	}
};

const iconMap: Record<string, React.ElementType> = {
	Shield,
	Brain,
	Smartphone,
	Globe,
	Blocks,
	Monitor
};
const tools = [
	'Selenium',
	'Cypress',
	'Playwright',
	'Appium',
	'Jest',
	'Postman',
	'Jira',
	'TestRail',
	'GitHub Actions',
	'Docker',
	'AWS',
	'Jenkins'
];

const faqs = [
	{
		question: 'What types of testing do you offer?',
		answer:
			'We offer comprehensive testing services including manual testing, automation testing, API testing, performance testing, security testing, mobile testing, and cross-browser compatibility testing.'
	},
	{
		question: 'How do you ensure quality across different platforms?',
		answer:
			'We use a combination of real devices, emulators, and automated testing tools to ensure your application works flawlessly across all target platforms.'
	},
	{
		question: 'Can you integrate with our existing workflow?',
		answer:
			'Absolutely. We can integrate with your CI/CD pipelines, project management tools, and development workflows.'
	},
	{
		question: 'What AI services do you provide?',
		answer:
			'We help businesses integrate AI capabilities including OpenAI APIs, build custom chatbots, implement workflow automation.'
	},
	{
		question: 'Do you offer ongoing maintenance and support?',
		answer:
			'Yes, we offer flexible maintenance and support packages to ensure your product continues to meet quality standards after launch.'
	}
];

export default function ServicesPage() {
	return (
		<>
			<ServicesBackground />
			<Navbar />
			<main className="relative z-10">
				<section className="pt-20 md:pt-24 pb-20">
					<div className="container-custom">
						<AnimatedSection className="text-center max-w-3xl mx-auto">
							<SectionLabel>Our Services</SectionLabel>
							<h1 className="heading-xl mb-6">
								Comprehensive solutions for <span className="text-gradient">every tech need</span>
							</h1>
							<p className="text-text-secondary text-lg">
								From quality assurance to cutting-edge AI integration, we deliver end-to-end
								solutions tailored to your business requirements.
							</p>
						</AnimatedSection>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<StaggerContainer className="space-y-24">
							{services.map((service, index) => {
								const Icon = iconMap[service.icon] || Shield;
								const isEven = index % 2 === 0;
								return (
									<StaggerItem key={service.id} id={service.id}>
										<div
											className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
										>
											<div className={isEven ? '' : 'lg:order-2'}>
												<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mb-6 shadow-glow">
													<Icon className="w-8 h-8 text-white" />
												</div>
												<h2 className="heading-lg mb-4">{service.title}</h2>
												<p className="text-text-secondary text-lg mb-6">{service.description}</p>
												<ul className="space-y-3 mb-6">
													{service.features.map((feature, i) => (
														<li key={i} className="flex items-center gap-3 text-text-secondary">
															<CheckCircle2 className="w-5 h-5 text-accent-emerald flex-shrink-0" />
															{feature}
														</li>
													))}
												</ul>
												<Link href="/contact" className="btn-primary group">
													Get Started
													<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
												</Link>
											</div>
										<div className={isEven ? '' : 'lg:order-1'}>
											<ImagePlaceholder
												filename={service.image}
												alt={service.title}
												aspectRatio="video"
												className="shadow-2xl"
											/>
										</div>
										</div>
									</StaggerItem>
								);
							})}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-12">
							<SectionLabel>Tools & Technologies</SectionLabel>
							<h2 className="heading-lg">
								The tools we use to <span className="text-gradient">deliver excellence</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="flex flex-wrap justify-center gap-4">
							{tools.map((tool, index) => (
								<StaggerItem key={index}>
									<div className="px-5 py-3 bg-surface border border-border rounded-full text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all hover:shadow-glow">
										{tool}
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-12">
							<SectionLabel>FAQ</SectionLabel>
							<h2 className="heading-lg">
								Frequently asked <span className="text-gradient">questions</span>
							</h2>
						</AnimatedSection>
						<div className="max-w-3xl mx-auto space-y-4">
							{faqs.map((faq, index) => (
								<AnimatedSection key={index} delay={index * 0.1}>
									<div className="card">
										<h3 className="heading-sm mb-3">{faq.question}</h3>
										<p className="text-text-secondary">{faq.answer}</p>
									</div>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				<CTASection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
