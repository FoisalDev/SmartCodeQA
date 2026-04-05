import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { CTASection } from '@/components/CTASection';
import { AboutBackground } from '@/components/backgrounds';
import { whyChooseUs, processSteps, teamMembers } from '@/data';

export const metadata: Metadata = {
	title: 'About Us',
	description:
		'Learn about SmartCodeQA - a technical agency built to help businesses ship with confidence through QA engineering, automation, AI integration, and emerging technology solutions.'
};

const values = [
	{
		title: 'Quality First',
		description: 'Every deliverable meets the highest quality standards before it reaches you.'
	},
	{
		title: 'Transparent Communication',
		description: 'Clear, honest updates at every stage of your project.'
	},
	{
		title: 'Continuous Learning',
		description: 'We stay ahead of industry trends to bring you the latest best practices.'
	},
	{
		title: 'Customer Success',
		description: "Your success is our success. We're invested in your outcomes."
	}
];

const industries = [
	'SaaS & Cloud Platforms',
	'E-commerce & Retail',
	'Healthcare & FinTech',
	'Education & EdTech',
	'Media & Entertainment',
	'Gaming & Metaverse',
	'Blockchain & Web3',
	'IoT & Smart Devices'
];

export default function AboutPage() {
	return (
		<>
			<AboutBackground />
			<Navbar />
			<main className="relative z-10">
				<section className="pt-32 pb-20">
					<div className="container-custom">
						<AnimatedSection className="text-center max-w-3xl mx-auto">
							<SectionLabel>About Us</SectionLabel>
							<h1 className="heading-xl mb-6">
								A technical agency built to help businesses{' '}
								<span className="text-gradient">ship with confidence.</span>
							</h1>
							<p className="text-text-secondary text-lg">
								SmartCodeQA combines quality assurance, automation, AI integration, and engineering
								support to help businesses build faster, reduce risk, and deliver better digital
								experiences.
							</p>
						</AnimatedSection>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<AnimatedSection>
								<ImagePlaceholder
									filename="2.jpeg"
									alt="Our Mission"
									aspectRatio="video"
									className="shadow-2xl"
								/>
							</AnimatedSection>
							<AnimatedSection delay={0.2}>
								<SectionLabel>Our Mission</SectionLabel>
								<h2 className="heading-lg mb-6">
									Empowering businesses through{' '}
									<span className="text-gradient">quality technology</span>
								</h2>
								<p className="text-text-secondary mb-6">
									We believe that every business deserves access to world-class quality assurance
									and technology services. Our mission is to democratize premium QA and engineering
									support.
								</p>
								<p className="text-text-secondary">
									From manual testing to AI-powered automation, from web development to blockchain
									solutions, we bring the expertise you need.
								</p>
							</AnimatedSection>
						</div>
					</div>
				</section>

				<section className="section-padding">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-16">
							<SectionLabel>Our Values</SectionLabel>
							<h2 className="heading-lg">
								The principles that guide <span className="text-gradient">everything we do</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{values.map((value, index) => (
								<StaggerItem key={index}>
									<div className="card card-hover h-full text-center">
										<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
											<span className="text-accent-blue font-bold text-xl">
												{String(index + 1).padStart(2, '0')}
											</span>
										</div>
										<h3 className="heading-sm mb-3">{value.title}</h3>
										<p className="text-text-secondary text-sm">{value.description}</p>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-16">
							<SectionLabel>Industries We Serve</SectionLabel>
							<h2 className="heading-lg">
								Expertise across <span className="text-gradient">multiple domains</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="flex flex-wrap justify-center gap-4">
							{industries.map((industry, index) => (
								<StaggerItem key={index}>
									<div className="px-6 py-3 bg-surface border border-border rounded-full text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-colors">
										{industry}
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-16">
							<SectionLabel>Why Choose Us</SectionLabel>
							<h2 className="heading-lg">
								What sets <span className="text-gradient">SmartCodeQA apart</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{whyChooseUs.map((item, index) => (
								<StaggerItem key={index}>
									<div className="card card-hover h-full">
										<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue/20 text-accent-blue text-sm font-bold mb-4">
											{String(index + 1).padStart(2, '0')}
										</span>
										<h3 className="heading-sm mb-3">{item.title}</h3>
										<p className="text-text-secondary text-sm">{item.description}</p>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-16">
							<SectionLabel>Our Process</SectionLabel>
							<h2 className="heading-lg">
								How we work <span className="text-gradient">together</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{processSteps.map((step) => (
								<StaggerItem key={step.step}>
									<div className="card text-center">
										<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mx-auto mb-6 shadow-glow">
											<span className="text-white font-bold text-xl">{step.step}</span>
										</div>
										<h3 className="heading-sm mb-3">{step.title}</h3>
										<p className="text-text-secondary text-sm">{step.description}</p>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-16">
							<SectionLabel>Our Team</SectionLabel>
							<h2 className="heading-lg">
								Meet the people behind <span className="text-gradient">the work</span>
							</h2>
						</AnimatedSection>
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
							{teamMembers.slice(0, 5).map((member) => (
								<StaggerItem key={member.id}>
									<div className="card card-hover text-center">
										<ImagePlaceholder
											filename={member.image}
											alt={member.name}
											aspectRatio="square"
											className="mb-4 mx-auto max-w-[180px]"
										/>
										<h3 className="font-heading font-semibold text-text-primary">{member.name}</h3>
										<p className="text-sm text-accent-blue">{member.role}</p>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>
						<AnimatedSection className="text-center mt-12">
							<Link href="/team" className="btn-secondary group">
								View Full Team
								<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Link>
						</AnimatedSection>
					</div>
				</section>

				<CTASection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
