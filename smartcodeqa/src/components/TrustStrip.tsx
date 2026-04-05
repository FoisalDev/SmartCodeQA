'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FuturisticBackground } from '@/components/backgrounds';
import { Github, Code2, Smartphone, Shield, Brain, Blocks, Globe, Database, Cloud } from 'lucide-react';

function ReactIcon({ size, color }: { size: number; color: string }) {
	return (
		<svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
			<circle cx="0" cy="0" r="2.05" fill={color} />
			<g stroke={color} strokeWidth="1" fill="none">
				<ellipse rx="11" ry="4.2" />
				<ellipse rx="11" ry="4.2" transform="rotate(60)" />
				<ellipse rx="11" ry="4.2" transform="rotate(120)" />
			</g>
		</svg>
	);
}

const techStack = [
	{ name: 'React', icon: 'react', color: '#61DAFB' },
	{ name: 'Next.js', icon: 'nextjs', color: '#FFFFFF' },
	{ name: 'Tailwind', icon: 'tailwind', color: '#06B6D4' },
	{ name: 'GitHub', icon: 'github', color: '#FFFFFF' },
	{ name: 'Node.js', icon: 'node', color: '#339933' },
	{ name: 'Python', icon: 'python', color: '#3776AB' },
	{ name: 'AWS', icon: 'aws', color: '#FF9900' },
	{ name: 'Docker', icon: 'docker', color: '#2496ED' },
	{ name: 'Blockchain', icon: 'blockchain', color: '#F7931A' },
	{ name: 'AI/ML', icon: 'ai', color: '#8B5CF6' },
	{ name: 'Mobile', icon: 'mobile', color: '#10B981' },
	{ name: 'QA', icon: 'qa', color: '#3B82F6' }
];

function TechIcon({ icon, color, name }: { icon: string; color: string; name: string }) {
	const getIcon = () => {
		switch (icon) {
			case 'react':
				return <ReactIcon size={28} color={color} />;
			case 'github':
				return <Github size={28} color={color} />;
			case 'blockchain':
				return <Blocks size={28} color={color} />;
			case 'ai':
				return <Brain size={28} color={color} />;
			case 'mobile':
				return <Smartphone size={28} color={color} />;
			case 'qa':
				return <Shield size={28} color={color} />;
			case 'nextjs':
				return <span style={{ color, fontWeight: 800, fontSize: '14px' }}>N</span>;
			case 'tailwind':
				return <Cloud size={28} color={color} />;
			case 'node':
				return <Code2 size={28} color={color} />;
			case 'python':
				return <Database size={28} color={color} />;
			case 'aws':
				return <Cloud size={28} color={color} />;
			case 'docker':
				return <Globe size={28} color={color} />;
			default:
				return <Code2 size={28} color={color} />;
		}
	};

	return (
		<motion.div
			className="flex-shrink-0 w-[140px] h-[70px] mx-3 cursor-pointer group"
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="relative w-full h-full bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-accent-blue/40 group-hover:shadow-lg group-hover:shadow-accent-blue/10">
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{ background: `linear-gradient(135deg, ${color}10, ${color}05)` }}
				/>
				<div className="relative z-10 flex flex-col items-center gap-1.5">
					<motion.div
						className="w-8 h-8 flex items-center justify-center"
						animate={{ y: [0, -2, 0] }}
						transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
					>
						{getIcon()}
					</motion.div>
					<span className="text-[10px] text-text-muted font-medium">{name}</span>
				</div>
			</div>
		</motion.div>
	);
}

export function TrustStrip() {
	return (
		<section className="py-20 border-y border-border relative overflow-hidden bg-surface/30">
			<FuturisticBackground />

			<div className="container-custom mb-12 relative z-20">
				<AnimatedSection className="text-center">
					<p className="text-text-muted text-sm uppercase tracking-widest mb-4">Powered by</p>
					<h3 className="heading-md">
						Modern Tech <span className="text-gradient">Stack</span>
					</h3>
				</AnimatedSection>
			</div>

			<div className="relative z-20">
				<div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-surface/80 to-transparent z-20 pointer-events-none" />
				<div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-surface/80 to-transparent z-20 pointer-events-none" />

				<div className="flex items-center py-4">
					<motion.div
						className="flex items-center gap-3"
						animate={{
							x: [0, -140 * techStack.length]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 40,
								ease: 'linear'
							}
						}}
					>
						{[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
							<TechIcon key={`top-${index}`} icon={tech.icon} color={tech.color} name={tech.name} />
						))}
					</motion.div>
				</div>

				<div className="flex items-center py-4 mt-4">
					<motion.div
						className="flex items-center gap-3"
						animate={{
							x: [-140 * techStack.length, 0]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 45,
								ease: 'linear'
							}
						}}
					>
						{[...techStack, ...techStack, ...techStack, ...techStack].reverse().map((tech, index) => (
							<TechIcon key={`bottom-${index}`} icon={tech.icon} color={tech.color} name={tech.name} />
						))}
					</motion.div>
				</div>
			</div>

			<div className="container-custom mt-16 relative z-20">
				<div className="flex flex-wrap justify-center gap-8 md:gap-16">
					{[
						{ value: '80+', label: 'Companies Trust Us' },
						{ value: 'Multi', label: 'Industries Served' },
						{ value: 'Global', label: 'Presence' }
					].map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="text-center cursor-hover"
						>
							<motion.div
								className="text-3xl font-bold text-gradient"
								animate={{ scale: [1, 1.05, 1] }}
								transition={{ duration: 3, repeat: Infinity }}
							>
								{stat.value}
							</motion.div>
							<div className="text-sm text-text-muted mt-1">{stat.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
