'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTASection() {
	return (
		<section className="section-padding">
			<div className="container-custom">
				<AnimatedSection>
					<motion.div
						whileHover={{ scale: 1.01 }}
						className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 border border-accent-blue/20 p-12 md:p-16"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-cyan/10" />
						<div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px]" />
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/20 rounded-full blur-[100px]" />

						<div className="relative text-center max-w-3xl mx-auto">
							<h2 className="heading-lg mb-6">
								Ready to build with <span className="text-gradient">confidence?</span>
							</h2>
							<p className="text-text-secondary text-lg mb-8">
								Whether you need QA support, automation, AI integration, or product development,
								SmartCodeQA is ready to help you ship quality products faster.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="btn-primary group">
									Contact Us
									<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</Link>
								<Link
									href="/contact"
									className="btn-secondary bg-white/5 border-white/20 hover:bg-white/10"
								>
									Book a Call
								</Link>
							</div>
						</div>
					</motion.div>
				</AnimatedSection>
			</div>
		</section>
	);
}
