'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { FuturisticBackground } from '@/components/backgrounds';

const features = [
	{
		title: 'QA-First Delivery Mindset',
		description: "Quality isn't an afterthought—it's built into every step of our process."
	},
	{
		title: 'Cross-Functional Technical Team',
		description: 'Specialists in QA, automation, AI, web, mobile, and emerging tech.'
	},
	{
		title: 'Scalable Support',
		description: 'Flexible engagement models for startups, agencies, and growing businesses.'
	},
	{
		title: 'Clean Process & Communication',
		description: 'Structured workflows, documentation, and transparent updates.'
	}
];

export function AboutPreview() {
	return (
		<section className="section-padding relative overflow-hidden">
			<div className="absolute inset-0 bg-background z-0" />
			<FuturisticBackground />
			<div className="container-custom relative z-20">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<AnimatedSection>
						<ImagePlaceholder
							filename="2.jpeg"
							alt="About SmartCodeQA"
							aspectRatio="video"
							className="shadow-2xl card-hover"
						/>
					</AnimatedSection>

					<AnimatedSection delay={0.2}>
						<SectionLabel>About Us</SectionLabel>
						<h2 className="heading-lg mb-6">
							A technical agency built to help businesses{' '}
							<span className="text-gradient">ship with confidence.</span>
						</h2>
						<p className="text-text-secondary text-lg mb-8">
							SmartCodeQA combines quality assurance, automation, AI integration, and engineering
							support to help businesses build faster, reduce risk, and deliver better digital
							experiences. We work across web, mobile, SaaS, AI, blockchain, and custom software
							environments with a practical, execution-focused approach.
						</p>

						<StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-8">
							{features.map((feature, index) => (
								<StaggerItem key={index}>
									<div className="card card-hover h-full group">
										<h3 className="font-heading font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors duration-300">
											{feature.title}
										</h3>
										<p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">{feature.description}</p>
									</div>
								</StaggerItem>
							))}
						</StaggerContainer>

						<Link href="/about" className="btn-primary group">
							About Us
							<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
						</Link>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
