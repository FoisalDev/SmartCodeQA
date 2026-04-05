'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle2, Users, Zap, Globe, Smartphone, Shield } from 'lucide-react';

const capabilityIcons = [
	{ icon: Web, label: 'Web' },
	{ icon: Smartphone, label: 'Mobile' },
	{ icon: Zap, label: 'Automation' },
	{ icon: Shield, label: 'Security' },
	{ icon: Globe, label: 'Web3' },
	{ icon: Users, label: 'AI/ML' }
];

function Web({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	);
}

export function MetricsSection() {
	return (
		<section className="section-padding">
			<div className="container-custom">
				<AnimatedSection className="text-center mb-16">
					<h2 className="heading-lg mb-4">
						Numbers that speak <span className="text-gradient">for themselves</span>
					</h2>
				</AnimatedSection>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
				>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="card text-center"
						>
							<div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
							<div className="text-text-secondary">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>

				<AnimatedSection>
					<div className="glass rounded-2xl p-8 md:p-12">
						<h3 className="heading-md mb-8 text-center">Our Expertise Coverage</h3>
						<div className="flex flex-wrap justify-center gap-4">
							{capabilityIcons.map((cap, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full"
								>
									<cap.icon className="w-5 h-5 text-accent-blue" />
									<span className="text-text-primary text-sm font-medium">{cap.label}</span>
								</motion.div>
							))}
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
