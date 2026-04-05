'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { projects } from '@/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { CTASection } from '@/components/CTASection';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { ProjectsBackground } from '@/components/backgrounds';
import { cn } from '@/lib/utils';

const categories = [
	'All',
	'QA Testing',
	'Mobile QA',
	'AI QA',
	'Automation',
	'Maintenance',
	'Product Research'
];

export default function ProjectsPage() {
	const [activeCategory, setActiveCategory] = useState('All');

	const filteredProjects = projects.filter((project) => {
		if (activeCategory === 'All') return true;
		return project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()));
	});

	return (
		<>
			<ProjectsBackground />
			<Navbar />
			<main className="relative z-10">
				<section className="pt-32 pb-20">
					<div className="container-custom">
						<AnimatedSection className="text-center max-w-3xl mx-auto">
							<SectionLabel>Our Work</SectionLabel>
							<h1 className="heading-xl mb-6">
								Featured <span className="text-gradient">projects</span>
							</h1>
							<p className="text-text-secondary text-lg">
								A selection of our recent work across QA testing, mobile development, AI
								integration, and more.
							</p>
						</AnimatedSection>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setActiveCategory(category)}
									className={cn(
										'px-4 py-2 rounded-full text-sm font-medium transition-all',
										activeCategory === category
											? 'bg-accent-blue text-white shadow-glow'
											: 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-border-hover'
									)}
								>
									{category}
								</button>
							))}
						</AnimatedSection>

						<StaggerContainer key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredProjects.map((project) => (
								<StaggerItem key={project.id}>
									<motion.div whileHover={{ y: -8 }} className="card card-hover h-full">
										<ImagePlaceholder
											filename={project.image}
											alt={project.title}
											aspectRatio="video"
											className="mb-6 card-hover"
										/>
										<div className="flex items-center gap-4 mb-3 flex-wrap">
											<span className="flex items-center gap-1 text-xs text-accent-blue">
												<Tag className="w-3 h-3" />
												{project.category}
											</span>
										</div>
										<h3 className="heading-sm mb-3">{project.title}</h3>
										<p className="text-text-secondary text-sm mb-4 line-clamp-3">
											{project.summary}
										</p>
										<div className="flex items-center gap-2 text-text-muted text-xs mb-4">
											<Calendar className="w-3 h-3" />
											{project.timeline}
										</div>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, index) => (
												<span
													key={index}
													className="px-2 py-1 text-xs bg-background border border-border rounded"
												>
													{tag}
												</span>
											))}
										</div>
									</motion.div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</section>

				<section className="section-padding">
					<div className="container-custom">
						<AnimatedSection className="text-center mb-12">
							<SectionLabel>Project Metrics</SectionLabel>
							<h2 className="heading-lg">
								Delivering results <span className="text-gradient">that matter</span>
							</h2>
						</AnimatedSection>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{ value: '80+', label: 'Projects Completed' },
								{ value: '60+', label: 'Happy Clients' },
								{ value: 'Multi', label: 'Industries Served' },
								{ value: '95%', label: 'Client Satisfaction' }
							].map((stat, index) => (
								<AnimatedSection key={index} delay={index * 0.1}>
									<div className="card text-center">
										<div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
										<div className="text-text-secondary">{stat.label}</div>
									</div>
								</AnimatedSection>
							))}
						</div>
					</div>
				</section>

				<CTASection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
