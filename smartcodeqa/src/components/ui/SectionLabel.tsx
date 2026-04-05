'use client';

import { cn } from '@/lib/utils';

interface SectionLabelProps {
	children: React.ReactNode;
	className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
	return (
		<span
			className={cn(
				'inline-block text-sm font-medium uppercase tracking-wider text-accent-blue mb-4',
				className
			)}
		>
			{children}
		</span>
	);
}
