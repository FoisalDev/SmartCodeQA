'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { projects } from '@/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

export function ProjectsPreview() {
	const previewProjects = projects.slice(0, 6);

	return (
		<section className="section-padding bg-surface/50">
			<div className="container-custom">
				<AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
					<div>
						<SectionLabel>Our Work</SectionLabel>
						<h2 className="heading-lg">
							Featured <span className="text-gradient">projects</span>
						</h2>
					</div>
					<Link href="/projects" className="btn-secondary group">
						View All Projects
						<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Link>
				</AnimatedSection>

				<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{previewProjects.map((project) => (
						<StaggerItem key={project.id}>
							<motion.div whileHover={{ y: -8 }} className="card card-hover h-full group">
								<ImagePlaceholder
									filename={project.image}
									alt={project.title}
									aspectRatio="video"
									className="mb-6 card-hover"
								/>
								<div className="flex items-center gap-4 mb-3">
									<span className="flex items-center gap-1 text-xs text-accent-blue">
										<Tag className="w-3 h-3" />
										{project.category}
									</span>
								</div>
								<h3 className="heading-sm mb-3 group-hover:text-accent-blue transition-colors">
									{project.title}
								</h3>
								<p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.summary}</p>
								<div className="flex items-center gap-2 text-text-muted text-xs">
									<Calendar className="w-3 h-3" />
									{project.timeline}
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</div>
		</section>
	);
}
