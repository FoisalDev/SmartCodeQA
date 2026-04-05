'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { teamMembers } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export function TeamPreview() {
	return (
		<section className="section-padding">
			<div className="container-custom">
				<AnimatedSection className="text-center mb-16">
					<SectionLabel>Our Team</SectionLabel>
					<h2 className="heading-lg mb-4">
						Meet the team behind <span className="text-gradient">SmartCodeQA</span>
					</h2>
					<p className="text-text-secondary max-w-2xl mx-auto">
						A dedicated team of specialists committed to delivering quality and excellence in every
						project.
					</p>
				</AnimatedSection>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
					{teamMembers.map((member) => (
						<StaggerItem key={member.id}>
							<motion.div
								className="card card-hover card-glow h-full group cursor-hover"
								whileHover={{ y: -12 }}
								transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
							>
								<div className="relative z-10">
									<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
										<ImagePlaceholder
											filename={member.image}
											alt={member.name}
											aspectRatio="square"
											className="mb-4 card-hover"
										/>
									</motion.div>

									<motion.h3
										className="font-heading font-semibold text-text-primary mb-1"
										whileHover={{ color: '#3B82F6' }}
										transition={{ duration: 0.2 }}
									>
										{member.name}
									</motion.h3>

									<motion.p
										className="text-sm text-accent-blue mb-3"
										whileHover={{ x: 4 }}
										transition={{ duration: 0.2 }}
									>
										{member.role}
									</motion.p>

									<p className="text-text-secondary text-sm line-clamp-2 mb-4">{member.bio}</p>

									<motion.div whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
										<Link
											href={`/team#${member.id}`}
											className="inline-flex items-center text-accent-blue text-sm font-medium"
										>
											View Profile
											<ArrowRight className="w-4 h-4 ml-1" />
										</Link>
									</motion.div>
								</div>

								<div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	);
}
