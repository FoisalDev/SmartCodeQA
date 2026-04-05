'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function MagneticButton({
	children,
	className = ''
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const handleMove = (e: React.MouseEvent) => {
		if (!ref.current) return;
		const { left, top, width, height } = ref.current.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 10;
		const y = (e.clientY - top - height / 2) / 10;
		ref.current.style.transform = `translate(${x}px, ${y}px)`;
	};

	const handleLeave = () => {
		if (ref.current) {
			ref.current.style.transform = 'translate(0px, 0px)';
		}
	};

	return (
		<div
			ref={ref}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
			className={`transition-transform duration-150 ease-out ${className}`}
		>
			{children}
		</div>
	);
}

export function ParallaxSection({
	children,
	offset = 50
}: {
	children: React.ReactNode;
	offset?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

	return (
		<motion.div ref={ref} style={{ y }}>
			{children}
		</motion.div>
	);
}

export function RotateOnScroll({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

	return (
		<motion.div ref={ref} style={{ rotate }}>
			{children}
		</motion.div>
	);
}

export function ScaleOnScroll({
	children,
	scaleRange = [0.8, 1.2]
}: {
	children: React.ReactNode;
	scaleRange?: number[];
}) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);

	return (
		<motion.div ref={ref} style={{ scale }}>
			{children}
		</motion.div>
	);
}

export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

	return (
		<motion.div ref={ref} style={{ opacity, y }} className={className}>
			{text}
		</motion.div>
	);
}

export function MorphShape() {
	return (
		<motion.div
			className="w-64 h-64 bg-gradient-to-br from-accent-blue/30 to-accent-cyan/30 rounded-3xl blur-3xl"
			animate={{
				borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%'],
				rotate: [0, 360]
			}}
			transition={{
				duration: 20,
				repeat: Infinity,
				repeatType: 'reverse',
				ease: 'linear'
			}}
		/>
	);
}
