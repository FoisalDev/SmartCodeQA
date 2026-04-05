'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Logo } from '@/components/ui/Logo';

function ProcessRotatingCircle({ className }: { className?: string }) {
	return (
		<div className={`absolute z-10 pointer-events-none hidden lg:block ${className}`}>
			<div className="relative w-44 h-44">
				<div className="absolute inset-0 rounded-full border-[2px] border-accent-blue/50 animate-spin-slow" />
				<div className="absolute inset-1 rounded-full border border-accent-cyan/40 animate-spin-reverse" />
				<div className="absolute inset-3 rounded-full border border-accent-blue/30 animate-spin-slow" style={{ animationDuration: '18s' }} />
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-accent-blue/50 flex items-center justify-center">
						<Logo size="md" breathing />
					</div>
				</div>
				<svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 176 176">
					<defs>
						<path id="processCirclePath" d="M 88, 88 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
					</defs>
					<text fontSize="11" fontWeight="700" fill="#3b82f6" dominantBaseline="middle" textAnchor="middle" style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 1))' }}>
						<textPath href="#processCirclePath" startOffset="0%">
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

export function ProcessSection() {
	return (
		<section className="section-padding bg-surface/50 relative overflow-hidden">
			<ProcessRotatingCircle className="-left-10 top-10" />
			<ProcessRotatingCircle className="-right-10 bottom-10" />
			<div className="container-custom relative z-10">
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
