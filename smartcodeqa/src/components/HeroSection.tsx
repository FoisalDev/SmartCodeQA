'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

function RotatingLogo() {
	return (
		<div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block z-10">
			<div className="relative w-44 h-44">
				<div className="absolute inset-0 rounded-full border-[2px] border-accent-blue/50 animate-spin-slow" />
				<div className="absolute inset-1 rounded-full border border-accent-cyan/40 animate-spin-reverse" />
				<div className="absolute inset-3 rounded-full border border-accent-blue/30 animate-spin-slow" style={{ animationDuration: '18s' }} />
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center shadow-lg shadow-accent-blue/50">
						<span className="text-white font-bold text-sm">SC</span>
					</div>
				</div>
				<svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 176 176">
					<defs>
						<path id="circlePath" d="M 88, 88 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
					</defs>
					<text fontSize="11" fontWeight="700" fill="#3b82f6" dominantBaseline="middle" textAnchor="middle" style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 1))' }}>
						<textPath href="#circlePath" startOffset="0%">
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

function FloatingStatusCard({
	position,
	delay,
	bgColor,
	borderColor,
	iconBg,
	iconColor,
	title,
	subtitle,
	icon
}: {
	position: string;
	delay: number;
	bgColor: string;
	borderColor: string;
	iconBg: string;
	iconColor: string;
	title: string;
	subtitle: string;
	icon: 'check' | 'shield';
}) {
		return (
		<motion.div
			className={`absolute ${position} glass rounded-2xl p-5 shadow-2xl cursor-pointer group`}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				y: [0, -12, 0],
				rotate: [0, 1, 0]
			}}
			transition={{
				delay,
				duration: 0.5,
				y: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 },
				rotate: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.3 }
			}}
			style={{
				background: `linear-gradient(135deg, ${bgColor} 0%, rgba(10, 15, 28, 0.9) 100%)`,
				border: `1px solid ${borderColor}`,
				boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px ${borderColor}20, inset 0 1px 0 rgba(255,255,255,0.05)`
			}}
			whileHover={{
				scale: 1.08,
				y: -8,
				boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 50px ${borderColor}40`
			}}
		>
			<div className="flex items-center gap-4 relative z-10">
				<motion.div
					className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center`}
					animate={{
						boxShadow: [
							`0 0 0 0 ${iconColor}40`,
							`0 0 20px 5px ${iconColor}30`,
							`0 0 0 0 ${iconColor}40`
						]
					}}
					transition={{ duration: 2, repeat: Infinity }}
				>
					{icon === 'check' ? (
						<svg
							className={`w-6 h-6 ${iconColor}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					) : (
						<svg
							className={`w-6 h-6 ${iconColor}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					)}
				</motion.div>
				<div>
					<div className="text-base font-bold text-text-primary group-hover:text-white transition-colors">
						{title}
					</div>
					<div className={`text-xs font-medium ${iconColor}`}>{subtitle}</div>
				</div>
			</div>
			<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</motion.div>
	);
}

export function HeroSection() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start']
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">

			<RotatingLogo />

			<motion.div className="container-custom relative z-20" style={{ y, opacity }}>
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue/15 border border-accent-blue/40 rounded-full backdrop-blur-md">
							<span className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-pulse" />
							<span className="text-sm text-accent-blue font-medium tracking-wide">
								Smart QA. Modern Engineering. Reliable Delivery.
							</span>
						</div>

						<h1 className="heading-xl">
							<span className="block">Build Faster.</span>
							<span className="block">Ship Better.</span>
							<span className="text-gradient block">Scale with Confidence.</span>
						</h1>

						<p className="text-lg text-text-secondary max-w-xl leading-relaxed">
							SmartCodeQA helps businesses launch and grow reliable digital products through QA
							engineering, automation, AI integration, web development, mobile development, and
							emerging technology solutions.
						</p>

						<div className="flex flex-wrap gap-4">
							<Link href="/contact" className="btn-primary group">
								<span>Book a Call</span>
								<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link href="/services" className="btn-secondary group">
								<Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
								View Services
							</Link>
						</div>

						<div className="flex flex-wrap items-center gap-10 pt-4">
							{[
								{ value: '80+', label: 'Clients Supported' },
								{ value: '8+', label: 'Specialists' },
								{ value: 'Multi', label: 'Domain Expertise' }
							].map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-2xl font-bold text-text-primary">{stat.value}</div>
									<div className="text-sm text-text-muted">{stat.label}</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative">
							<motion.div
								animate={{
									y: [0, -15, 0],
									rotate: [0, 0.5, 0]
								}}
								transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
							>
								<ImagePlaceholder
									filename="1.jpeg"
									alt="Dashboard Preview"
									aspectRatio="video"
									className="shadow-2xl ring-2 ring-accent-blue/30 card-hover"
								/>
							</motion.div>

							<FloatingStatusCard
								position="-top-8 -right-8"
								delay={0.5}
								bgColor="rgba(16, 185, 129, 0.1)"
								borderColor="rgba(16, 185, 129, 0.4)"
								iconBg="bg-accent-emerald/20"
								iconColor="text-accent-emerald"
								title="All Systems"
								subtitle="Operational"
								icon="check"
							/>

							<FloatingStatusCard
								position="-bottom-8 -left-8"
								delay={0.8}
								bgColor="rgba(59, 130, 246, 0.1)"
								borderColor="rgba(59, 130, 246, 0.4)"
								iconBg="bg-accent-blue/20"
								iconColor="text-accent-blue"
								title="Quality First"
								subtitle="99.9% Coverage"
								icon="shield"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
				<div className="flex flex-col items-center gap-2">
					<span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
					<ChevronDown className="w-6 h-6 text-text-muted" />
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
		</section>
	);
}
