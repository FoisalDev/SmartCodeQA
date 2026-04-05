'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function ProcessSection() {
	return (
		<section className="section-padding bg-surface/50">
			<div className="container-custom">
				<AnimatedSection className="text-center mb-16">
					<SectionLabel>Our Process</SectionLabel>
					<h2 className="heading-lg mb-4">
						How we <span className="text-gradient">work together</span>
					</h2>
					<p className="text-text-secondary max-w-2xl mx-auto">
						A structured approach that ensures quality delivery at every stage of your project.
					</p>
				</AnimatedSection>

				<div className="relative">
					<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent -translate-y-1/2" />

					<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{processSteps.map((step, index) => (
							<StaggerItem key={step.step}>
								<motion.div
									className="card card-hover h-full text-center relative cursor-hover"
									whileHover={{ y: -8 }}
									transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
								>
									<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-blue/25">
										<span className="text-white font-bold text-2xl">{step.step}</span>
									</div>
									<h3 className="heading-sm mb-3">{step.title}</h3>
									<p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
								</motion.div>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</div>
		</section>
	);
}
