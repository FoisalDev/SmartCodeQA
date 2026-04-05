'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FuturisticBackground } from '@/components/backgrounds';

const clients = [
	{ name: 'Client Logo', filename: '4.jpeg' },
	{ name: 'Client Logo', filename: '5.jpeg' },
	{ name: 'Client Logo', filename: '6.jpeg' },
	{ name: 'Client Logo', filename: '7.jpeg' },
	{ name: 'Client Logo', filename: '4.jpeg' },
	{ name: 'Client Logo', filename: '5.jpeg' }
];

function ClientLogo({ filename, name }: { filename: string; name: string }) {
	return (
		<motion.div
			className="flex-shrink-0 w-[200px] h-[80px] mx-4 cursor-hover group"
			whileHover={{ scale: 1.08 }}
			transition={{ duration: 0.3 }}
		>
			<div className="relative w-full h-full bg-background/80 border border-border rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-accent-blue/50 group-hover:shadow-glow">
				<motion.div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<div className="relative z-10 flex flex-col items-center gap-2">
					<motion.div
						className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center"
						animate={{ rotate: [0, 5, -5, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
					>
						<div className="w-4 h-4 rounded bg-accent-blue/50" />
					</motion.div>
					<span className="text-xs text-text-muted font-mono">{filename}</span>
				</div>
				<motion.div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-blue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
					<p className="text-text-muted text-sm uppercase tracking-widest mb-4">Trusted by</p>
					<h3 className="heading-md">
						Innovative Companies <span className="text-gradient">Worldwide</span>
					</h3>
				</AnimatedSection>
			</div>

			<div className="relative z-20">
				<div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-surface/80 to-transparent z-20 pointer-events-none" />
				<div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-surface/80 to-transparent z-20 pointer-events-none" />

				<div className="flex items-center py-4">
					<motion.div
						className="flex items-center gap-4"
						animate={{
							x: [0, -200 * clients.length]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 30,
								ease: 'linear'
							}
						}}
					>
						{[...clients, ...clients, ...clients, ...clients].map((client, index) => (
							<ClientLogo key={`top-${index}`} filename={client.filename} name={client.name} />
						))}
					</motion.div>
				</div>

				<div className="flex items-center py-4 mt-4">
					<motion.div
						className="flex items-center gap-4"
						animate={{
							x: [-200 * clients.length, 0]
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 35,
								ease: 'linear'
							}
						}}
					>
						{[...clients, ...clients, ...clients, ...clients].reverse().map((client, index) => (
							<ClientLogo key={`bottom-${index}`} filename={client.filename} name={client.name} />
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
