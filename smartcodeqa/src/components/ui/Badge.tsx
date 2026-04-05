'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BadgeProps {
	children: React.ReactNode;
	variant?: 'default' | 'outline' | 'glow';
	className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
	const variants = {
		default: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
		outline: 'bg-transparent text-text-secondary border-border',
		glow: 'bg-accent-blue/20 text-accent-blue border-accent-blue/40 shadow-glow'
	};

	return (
		<motion.span
			whileHover={{ scale: 1.05 }}
			className={cn(
				'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300',
				variants[variant],
				className
			)}
		>
			{children}
		</motion.span>
	);
}
