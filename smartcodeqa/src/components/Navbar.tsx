'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	return (
		<header className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-white/10">
			<div className="flex items-center justify-between py-4 px-4 md:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto flex items-center justify-between w-full">
				<Link href="/" className="flex items-center gap-2">
					<Logo size="md" className="w-10 h-10 md:w-12 md:h-12" />
					<span className="font-heading font-bold text-xl md:text-2xl text-text-primary">
						SmartCode<span className="text-accent-blue">QA</span>
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-2">
					{navLinks.map((link, index) => (
						<div key={index} className="relative">
							{link.dropdown ? (
								<div
									className="relative"
									onMouseEnter={() => setActiveDropdown(link.label)}
									onMouseLeave={() => setActiveDropdown(null)}
								>
									<button className="flex items-center gap-1 px-4 py-2 text-text-secondary hover:text-text-primary transition-colors text-base">
										{link.label}
										<ChevronDown className="w-4 h-4" />
									</button>
									{activeDropdown === link.label && (
										<div className="absolute top-full left-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-xl">
											{link.items?.map((item, i) => (
												<Link
													key={i}
													href={item.href}
													className="flex px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated first:rounded-t-xl last:rounded-b-xl"
												>
												{item.label}
												</Link>
											))}
										</div>
									)}
								</div>
							) : (
								<Link href={link.href!} className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors text-base">
									{link.label}
								</Link>
							)}
						</div>
					))}
				</nav>

				<div className="hidden lg:flex">
					<Link href="/contact" className="btn-primary">
						<Phone className="w-4 h-4 mr-2" />
						Book a Call
					</Link>
				</div>

				<div className="lg:hidden flex items-center mr-4">
					<button
						className="p-2 text-text-primary"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="lg:hidden absolute top-full left-0 right-0 z-[110] bg-background overflow-y-auto border-t border-border/50">
					<div className="px-4 py-4 pb-8">
						<div className="flex flex-col gap-1">
							{navLinks.map((link, index) => (
								<div key={index}>
									{link.dropdown ? (
										<>
											<span className="block px-4 py-2 text-text-muted text-sm font-medium uppercase">
												{link.label}
											</span>
											{link.items?.map((item, i) => (
												<Link
													key={i}
													href={item.href}
													className="block px-6 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg"
													onClick={() => setIsMobileMenuOpen(false)}
												>
													{item.label}
												</Link>
											))}
										</>
									) : (
										<Link
											href={link.href!}
											className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{link.label}
										</Link>
									)}
								</div>
							))}
							<Link
								href="/contact"
								className="btn-primary mt-4"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<Phone className="w-4 h-4 mr-2" />
								Book a Call
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}