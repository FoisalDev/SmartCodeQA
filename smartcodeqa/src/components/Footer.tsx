'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Linkedin, Github } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const footerLinks = {
	company: [
		{ href: '/about', label: 'About Us' },
		{ href: '/team', label: 'Team Details' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact Us' }
	],
	services: [
		{ href: '/services#qa-testing', label: 'QA Testing' },
		{ href: '/services#ai-apps', label: 'AI Apps & Integrations' },
		{ href: '/services#mobile-development', label: 'Mobile Development' },
		{ href: '/services#web-development', label: 'Web Development' },
		{ href: '/services#blockchain', label: 'Blockchain & NFT' },
		{ href: '/services#desktop', label: 'Desktop Apps' }
	],
	legal: [
		{ href: '/privacy', label: 'Privacy Policy' },
		{ href: '/terms', label: 'Terms of Service' },
		{ href: '/faq', label: 'FAQ' }
	]
};

export function Footer() {
	return (
		<footer className="bg-surface border-t border-border">
			<div className="container-custom section-padding">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center gap-2 mb-6">
							<Logo size="xl" />
							<span className="font-heading font-bold text-xl text-text-primary">
								SmartCode<span className="text-accent-blue">QA</span>
							</span>
						</Link>
						<p className="text-text-secondary mb-6 max-w-md">
							Your Partner in Quality Assurance and Emerging Technologies. We help startups and
							growing businesses deliver reliable digital products.
						</p>
						<div className="flex items-center gap-4">
							<a
								href="https://www.facebook.com/profile.php?id=61586378348423"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/company/smartcodeqa/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all"
								aria-label="GitHub"
							>
								<Github className="w-5 h-5" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-heading font-semibold text-text-primary mb-4">Company</h4>
						<ul className="space-y-3">
							{footerLinks.company.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-text-secondary hover:text-accent-blue transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-heading font-semibold text-text-primary mb-4">Services</h4>
						<ul className="space-y-3">
							{footerLinks.services.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-text-secondary hover:text-accent-blue transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-heading font-semibold text-text-primary mb-4">Contact</h4>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<Mail className="w-5 h-5 text-accent-blue mt-0.5 shrink-0" />
								<a
									href="mailto:info@smartcodeqa.com"
									className="text-text-secondary hover:text-accent-blue transition-colors"
								>
									info@smartcodeqa.com
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Phone className="w-5 h-5 text-accent-blue mt-0.5 shrink-0" />
								<a
									href="tel:+8801718192949"
									className="text-text-secondary hover:text-accent-blue transition-colors"
								>
									+880 1718-192949
								</a>
							</li>
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-accent-blue mt-0.5 shrink-0" />
								<span className="text-text-secondary">
									Sherpur, Bogura
									<br />
									Bangladesh
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-text-muted text-sm">
							© {new Date().getFullYear()} SmartCodeQA. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							{footerLinks.legal.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className="text-text-muted text-sm hover:text-accent-blue transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
