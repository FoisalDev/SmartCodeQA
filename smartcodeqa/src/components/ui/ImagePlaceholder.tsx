'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImagePlaceholderProps {
	filename: string;
	alt?: string;
	className?: string;
	aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
}

const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.bmp'];

export function ImagePlaceholder({
	filename,
	alt = 'Placeholder image',
	className,
	aspectRatio = 'square'
}: ImagePlaceholderProps) {
	const aspectClasses = {
		video: 'aspect-video',
		square: 'aspect-square',
		portrait: 'aspect-[3/4]',
		wide: 'aspect-[16/9]'
	};

	const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
	const [showFallback, setShowFallback] = useState(false);

	useEffect(() => {
		if (filename.includes('.')) {
			setResolvedSrc(`/images/${filename}`);
			return;
		}

		let found = false;
		for (const ext of extensions) {
			const img = document.createElement('img');
			img.onload = () => {
				if (!found) {
					found = true;
					setResolvedSrc(`/images/${filename}${ext}`);
				}
			};
			img.onerror = () => {
				if (!found && ext === extensions[extensions.length - 1]) {
					setShowFallback(true);
				}
			};
			img.src = `/images/${filename}${ext}`;
		}
	}, [filename]);

	if (showFallback || !resolvedSrc) {
		return (
			<motion.div
				whileHover={{ scale: 1.02 }}
				transition={{ duration: 0.3 }}
				className={cn(
					'relative overflow-hidden rounded-xl bg-surface border border-border flex items-center justify-center',
					aspectClasses[aspectRatio],
					className
				)}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5" />
				<div className="flex flex-col items-center gap-2 text-text-muted">
					<svg className="w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<span className="text-sm font-mono opacity-50">{filename}</span>
				</div>
			</motion.div>
		);
	}

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0.3 }}
			className={cn(
				'relative overflow-hidden rounded-xl bg-surface border border-border',
				aspectClasses[aspectRatio],
				className
			)}
		>
			<Image
				src={resolvedSrc}
				alt={alt}
				fill
				className="object-cover"
			/>
		</motion.div>
	);
}
