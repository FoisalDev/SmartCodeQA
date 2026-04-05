'use client';

import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Logo } from '@/components/ui/Logo';

function RotatingCircle({ className }: { className?: string }) {
	return (
		<div className={`absolute z-10 pointer-events-none hidden lg:block ${className}`}>
			<div className="relative w-44 h-44">
				<div className="absolute inset-0 rounded-full border-[2px] border-accent-blue/50 animate-spin-slow" />
				<div className="absolute inset-1 rounded-full border border-accent-cyan/40 animate-spin-reverse" />
				<div className="absolute inset-3 rounded-full border border-accent-blue/30 animate-spin-slow" style={{ animationDuration: '18s' }} />
				<div className="absolute inset-0 flex items-center justify-center">
					<Logo size="md" breathing />
				</div>
				<svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 176 176">
					<defs>
						<path id="whyCirclePath" d="M 88, 88 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
					</defs>
					<text fontSize="11" fontWeight="700" fill="#3b82f6" dominantBaseline="middle" textAnchor="middle" style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 1))' }}>
						<textPath href="#whyCirclePath" startOffset="0%">
							✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦•✦SmartCodeQA✦
						</textPath>
					</text>
				</svg>
				<div
					className="absolute inset-0 rounded-full animate-pulse-glow"
					style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
				/>
			</div>
		</div>
	);
}

export function WhyChooseUs() {
	return (
		<section className="section-padding relative overflow-hidden">
			<RotatingCircle className="-left-20 top-1/4" />
			<RotatingCircle className="-right-20 bottom-1/4" />
			<div className="container-custom relative z-10">
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
