'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About Us' },
	{ href: '/services', label: 'Services' },
	{
		label: 'Pages',
		dropdown: true,
		items: [
			{ href: '/projects', label: 'Projects' },
			{ href: '/team', label: 'Team Details' }
		]
	},
	{ href: '/contact', label: 'Contact Us' }
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				isScrolled ? 'glass border-b border-border py-3 backdrop-blur-xl' : 'bg-transparent py-5'
			)}
		>
			<nav className="container-custom">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2 group cursor-pointer">
						<Logo size="lg" animated />
						<motion.span
							className="font-heading font-bold text-xl text-text-primary"
							animate={{ opacity: [1, 0.7, 1] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							SmartCode<span className="text-accent-blue">QA</span>
						</motion.span>
					</Link>

					<div className="hidden lg:flex items-center gap-1">
						{navLinks.map((link, index) => (
							<div key={index} className="relative">
								{link.dropdown ? (
									<div
										className="relative"
										onMouseEnter={() => setActiveDropdown(link.label)}
										onMouseLeave={() => setActiveDropdown(null)}
									>
										<motion.button
											className="flex items-center gap-1 px-3 py-2 text-text-secondary hover:text-text-primary transition-colors cursor-hover"
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.2 }}
										>
											{link.label}
											<motion.div
												animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
												transition={{ duration: 0.2 }}
											>
												<ChevronDown className="w-4 h-4" />
											</motion.div>
										</motion.button>
										<AnimatePresence>
											{activeDropdown === link.label && (
												<motion.div
													initial={{ opacity: 0, y: 10, scale: 0.95 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: 10, scale: 0.95 }}
													transition={{ duration: 0.2 }}
													className="absolute top-full left-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-xl overflow-hidden"
												>
													{link.items?.map((item, i) => (
														<motion.div
															key={i}
															initial={{ x: -10, opacity: 0 }}
															animate={{ x: 0, opacity: 1 }}
															transition={{ delay: i * 0.05 }}
														>
															<Link
																href={item.href}
																className="flex items-center px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors cursor-hover"
															>
																<motion.span
																	className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3 opacity-0 group-hover:opacity-100"
																	initial={{ opacity: 0 }}
																/>
																{item.label}
															</Link>
														</motion.div>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								) : (
									<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
										<Link
											href={link.href!}
											className="relative px-3 py-2 text-text-secondary hover:text-text-primary transition-colors cursor-hover group"
										>
											{link.label}
											<motion.span
												className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
												initial={{ scaleX: 0 }}
												whileHover={{ scaleX: 1 }}
												transition={{ duration: 0.3 }}
											/>
										</Link>
									</motion.div>
								)}
							</div>
						))}
					</div>

					<div className="hidden lg:flex items-center gap-4">
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link href="/contact" className="btn-primary cursor-hover">
								<Phone className="w-4 h-4 mr-2" />
								Book a Call
							</Link>
						</motion.div>
					</div>

					<motion.button
						className="lg:hidden p-2 text-text-primary cursor-hover"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
						whileTap={{ scale: 0.9 }}
					>
						{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</motion.button>
				</div>
			</nav>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden glass border-t border-border"
					>
						<div className="container-custom py-6">
							<div className="flex flex-col gap-2">
								{navLinks.map((link, index) => (
									<motion.div
										key={index}
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: index * 0.05 }}
									>
										{link.dropdown ? (
											<>
												<span className="block px-4 py-3 text-text-muted text-sm font-medium uppercase tracking-wider">
													{link.label}
												</span>
												{link.items?.map((item, i) => (
													<Link
														key={i}
														href={item.href}
														className="block px-6 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg transition-colors cursor-hover"
														onClick={() => setIsMobileMenuOpen(false)}
													>
														{item.label}
													</Link>
												))}
											</>
										) : (
											<Link
												href={link.href!}
												className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg transition-colors cursor-hover"
												onClick={() => setIsMobileMenuOpen(false)}
											>
												{link.label}
											</Link>
										)}
									</motion.div>
								))}
								<motion.div
									className="mt-4 pt-4 border-t border-border"
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.3 }}
								>
									<Link
										href="/contact"
										className="btn-primary w-full justify-center cursor-hover"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Phone className="w-4 h-4 mr-2" />
										Book a Call
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
