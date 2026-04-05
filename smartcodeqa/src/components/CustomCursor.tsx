'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
			if (!isVisible) setIsVisible(true);
		},
		[isVisible]
	);

	const handleMouseDown = useCallback(() => setIsClicking(true), []);
	const handleMouseUp = useCallback(() => setIsClicking(false), []);
	const handleMouseLeave = useCallback(() => setIsVisible(false), []);
	const handleMouseEnter = useCallback(() => setIsVisible(true), []);

	useEffect(() => {
		if (!isMounted) return;

		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const isInteractive =
				target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				target.tagName === 'INPUT' ||
				target.tagName === 'TEXTAREA' ||
				target.tagName === 'SELECT' ||
				target.closest('a') ||
				target.closest('button') ||
				target.closest('input') ||
				target.closest('textarea') ||
				target.classList.contains('cursor-hover') ||
				target.closest('.cursor-hover');

			setIsHovering(!!isInteractive);
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		document.documentElement.addEventListener('mouseleave', handleMouseLeave);
		document.documentElement.addEventListener('mouseenter', handleMouseEnter);
		window.addEventListener('mouseover', handleMouseOver);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
			document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
			window.removeEventListener('mouseover', handleMouseOver);
		};
	}, [
		isMounted,
		handleMouseMove,
		handleMouseDown,
		handleMouseUp,
		handleMouseLeave,
		handleMouseEnter
	]);

	if (!isMounted) return null;

	const dotSize = isClicking ? 8 : isHovering ? 10 : 12;
	const ringSize = isClicking ? 50 : isHovering ? 70 : 60;
	const ringOpacity = isHovering ? 0.8 : 0.5;

	return (
		<>
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999]"
				animate={{ x: position.x, y: position.y, opacity: isVisible ? 1 : 0 }}
				transition={{ type: 'spring', stiffness: 1200, damping: 40 }}
				style={{ translateX: '-50%', translateY: '-50%' }}
			>
				<motion.div
					className="rounded-full"
					animate={{ width: dotSize, height: dotSize }}
					transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
					style={{
						background: isHovering
							? 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)'
							: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
						boxShadow: isHovering
							? '0 0 15px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.5), 0 0 45px rgba(6, 182, 212, 0.3)'
							: '0 0 8px rgba(59, 130, 246, 0.7), 0 0 15px rgba(59, 130, 246, 0.4)'
					}}
				/>
			</motion.div>

			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9998]"
				animate={{ x: position.x, y: position.y, opacity: isVisible ? 1 : 0 }}
				transition={{ type: 'spring', stiffness: 400, damping: 28 }}
				style={{ translateX: '-50%', translateY: '-50%' }}
			>
				<motion.div
					className="rounded-full"
					animate={{
						width: ringSize,
						height: ringSize,
						opacity: ringOpacity
					}}
					transition={{ type: 'spring', stiffness: 400, damping: 28 }}
					style={{
						border: `2px solid ${isHovering ? '#3B82F6' : 'rgba(59, 130, 246, 0.6)'}`,
						boxShadow: isHovering
							? '0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.15)'
							: '0 0 12px rgba(59, 130, 246, 0.25), inset 0 0 10px rgba(59, 130, 246, 0.1)'
					}}
				/>
			</motion.div>

			<AnimatePresence>
				{isHovering && isVisible && (
					<motion.div
						className="fixed top-0 left-0 pointer-events-none z-[9997]"
						animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
						initial={{ opacity: 0, scale: 0.5 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ type: 'spring', stiffness: 600, damping: 25 }}
						style={{ translateX: '-50%', translateY: '40px' }}
					>
						<div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/25 via-accent-cyan/25 to-accent-blue/25 border border-accent-blue/50 backdrop-blur-md">
							<span className="text-[10px] font-bold tracking-[0.25em] bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
								CLICK
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9996]"
				animate={{
					x: position.x,
					y: position.y,
					opacity: isVisible ? (isHovering ? 0.4 : 0.2) : 0,
					scale: isHovering ? 1.5 : 1
				}}
				transition={{ type: 'spring', stiffness: 250, damping: 30 }}
				style={{ translateX: '-50%', translateY: '-50%' }}
			>
				<div
					className="rounded-full"
					style={{
						width: ringSize + 30,
						height: ringSize + 30,
						background: isHovering
							? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
							: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
					}}
				/>
			</motion.div>

			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9995]"
				animate={{
					x: position.x,
					y: position.y,
					opacity: isVisible ? (isClicking ? 0.6 : 0.15) : 0
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 35 }}
				style={{ translateX: '-50%', translateY: '-50%' }}
			>
				<div
					className="rounded-full"
					style={{
						width: 100,
						height: 100,
						background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)'
					}}
				/>
			</motion.div>
		</>
	);
}
