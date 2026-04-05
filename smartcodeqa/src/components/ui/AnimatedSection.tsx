'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	id?: string;
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
			className={cn('', className)}
			id={id}
		>
			{children}
		</motion.div>
	);
}

export function AnimatedFadeIn({ children, className, delay = 0 }: AnimatedSectionProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
			className={cn('', className)}
		>
			{children}
		</motion.div>
	);
}

export function StaggerContainer({
	children,
	className,
	delay = 0
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-50px' }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: 0.12,
						delayChildren: delay
					}
				}
			}}
			className={cn('', className)}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className,
	id
}: {
	children: React.ReactNode;
	className?: string;
	id?: string;
}) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0 }
			}}
			transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			className={cn('', className)}
			id={id}
		>
			{children}
		</motion.div>
	);
}

export function ScaleOnHover({
	children,
	className = ''
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			whileHover={{ scale: 1.02, y: -8 }}
			transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
			className={cn('', className)}
		>
			{children}
		</motion.div>
	);
}
