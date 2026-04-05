'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Brain, Smartphone, Globe, Blocks, Monitor } from 'lucide-react';
import { services } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FuturisticBackground } from '@/components/backgrounds';

const iconMap: Record<string, React.ElementType> = {
	Shield,
	Brain,
	Smartphone,
	Globe,
	Blocks,
	Monitor
};

export function ServicesGrid() {
	return (
		<section className="section-padding bg-surface/50 relative overflow-hidden">
			<FuturisticBackground />
			<div className="container-custom relative z-10">
				<AnimatedSection className="text-center mb-16">
					<SectionLabel>Our Services</SectionLabel>
					<h2 className="heading-lg mb-4">
						Comprehensive solutions for <span className="text-gradient">every tech need</span>
					</h2>
					<p className="text-text-secondary max-w-2xl mx-auto">
						From quality assurance to cutting-edge AI integration, we deliver end-to-end solutions
						tailored to your business requirements.
					</p>
				</AnimatedSection>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => {
						const Icon = iconMap[service.icon] || Shield;
						return (
							<StaggerItem key={service.id}>
								<Link href={`/services#${service.id}`}>
									<motion.div
										className="card card-hover card-glow h-full group cursor-hover"
										whileHover={{ y: -12 }}
										transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
									>
										<div className="relative z-10">
											<motion.div
												className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-blue/20"
												whileHover={{ scale: 1.1, rotate: 5 }}
											>
												<Icon className="w-8 h-8 text-accent-blue" />
											</motion.div>

											<h3 className="heading-sm mb-3 group-hover:text-accent-blue transition-colors duration-300">
												{service.title}
											</h3>
											<p className="text-text-secondary mb-6 leading-relaxed">
												{service.description}
											</p>

											<motion.div
												className="flex items-center text-accent-blue font-medium text-sm"
												whileHover={{ x: 8 }}
												transition={{ duration: 0.2 }}
											>
												<span className="mr-2">Learn More</span>
												<ArrowRight className="w-4 h-4" />
											</motion.div>
										</div>

										<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									</motion.div>
								</Link>
							</StaggerItem>
						);
					})}
				</StaggerContainer>
			</div>
		</section>
	);
}
