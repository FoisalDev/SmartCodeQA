'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LogoProps {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
	animated?: boolean;
	breathing?: boolean;
}

const sizeMap = {
	sm: 40,
	md: 50,
	lg: 60,
	xl: 70
};

export function Logo({ size = 'md', className, animated = false, breathing = false }: LogoProps) {
	const dimensions = sizeMap[size];

	const LogoContent = () => (
		<Image
			src="/images/logo.png"
			alt="SmartCodeQA Logo"
			width={dimensions}
			height={dimensions}
			className="object-contain"
		/>
	);

	if (breathing) {
		return (
			<motion.div
				className={cn('relative flex items-center justify-center', className)}
				animate={{
					scale: [1, 1.08, 1],
					filter: [
						'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
						'drop-shadow(0 0 16px rgba(59, 130, 246, 0.7))',
						'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
					]
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: 'easeInOut'
				}}
			>
				<LogoContent />
			</motion.div>
		);
	}

	if (animated) {
		return (
			<motion.div
				className={cn('relative flex items-center justify-center', className)}
				whileHover={{ scale: 1.1, rotate: 5 }}
				animate={{
					scale: [1, 1.05, 1],
					filter: [
						'drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))',
						'drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))',
						'drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))'
					]
				}}
				transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
			>
				<LogoContent />
			</motion.div>
		);
	}

	return (
		<div className={cn('relative flex items-center justify-center', className)}>
			<LogoContent />
		</div>
	);
}
