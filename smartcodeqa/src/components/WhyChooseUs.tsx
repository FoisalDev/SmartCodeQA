'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function WhyChooseUs() {
	return (
		<section className="section-padding">
			<div className="container-custom">
				<AnimatedSection className="text-center mb-16">
					<SectionLabel>Why Choose Us</SectionLabel>
					<h2 className="heading-lg mb-4">
						Why businesses choose <span className="text-gradient">SmartCodeQA</span>
					</h2>
					<p className="text-text-secondary max-w-2xl mx-auto">
						We combine technical expertise with a delivery-first mindset to help you ship quality
						products faster.
					</p>
				</AnimatedSection>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{whyChooseUs.map((item, index) => (
						<StaggerItem key={index}>
							<motion.div
								className="card card-hover card-glow h-full relative cursor-hover"
								whileHover={{ y: -10 }}
								transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
							>
								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-blue/5 to-transparent rounded-bl-full" />
								<div className="relative z-10">
									<span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-blue/15 text-accent-blue text-sm font-bold mb-5">
										{String(index + 1).padStart(2, '0')}
									</span>
									<h3 className="heading-sm mb-3">{item.title}</h3>
									<p className="text-text-secondary leading-relaxed">{item.description}</p>
								</div>
								<div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-tl from-accent-blue/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	);
}
