'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { teamMembers } from '@/data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { CTASection } from '@/components/CTASection';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { TeamBackground } from '@/components/backgrounds';

export default function TeamPage() {
	return (
		<>
			<TeamBackground />
			<Navbar />
			<main className="relative z-10">
				<section className="pt-20 md:pt-24 pb-20">
					<div className="container-custom">
						<AnimatedSection className="text-center max-w-3xl mx-auto">
							<SectionLabel>Our Team</SectionLabel>
							<h1 className="heading-xl mb-6">
								Meet the team behind <span className="text-gradient">SmartCodeQA</span>
							</h1>
							<p className="text-text-secondary text-lg">
								A dedicated team of specialists committed to delivering quality and excellence in
								every project.
							</p>
						</AnimatedSection>
					</div>
				</section>

				<section className="section-padding bg-surface/50">
					<div className="container-custom">
						<StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map((member) => (
								<StaggerItem key={member.id} id={member.id}>
									<motion.div whileHover={{ y: -8 }} className="card card-hover h-full">
										<ImagePlaceholder
											filename={member.image}
											alt={member.name}
											aspectRatio="video"
											className="mb-6 card-hover"
										/>
										<h3 className="heading-sm mb-1">{member.name}</h3>
										<p className="text-accent-blue mb-4">{member.role}</p>
										<p className="text-text-secondary text-sm mb-6">{member.bio}</p>
										<div className="mb-4">
											<h4 className="text-sm font-medium text-text-primary mb-3">Expertise</h4>
											<div className="flex flex-wrap gap-2">
												{member.expertise.slice(0, 4).map((skill) => (
													<span
														key={skill}
														className="px-2 py-1 text-xs bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded"
													>
														{skill}
													</span>
												))}
											</div>
										</div>
										<div className="flex flex-col space-y-2">
											<a
												href={`mailto:${member.email}`}
												className="inline-flex items-center text-accent-blue text-sm font-medium hover:underline"
											>
												<Mail className="w-4 h-4 mr-2" />
												{member.email}
											</a>
											{member.linkedin && (
												<a
													href={`https://${member.linkedin}`}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center text-accent-blue text-sm font-medium hover:underline"
												>
													<Linkedin className="w-4 h-4 mr-2" />
													LinkedIn
												</a>
											)}
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
							<SectionLabel>Team Culture</SectionLabel>
							<h2 className="heading-lg">
								How we <span className="text-gradient">work together</span>
							</h2>
						</AnimatedSection>
						<div className="grid md:grid-cols-3 gap-6">
							{[
								{
									title: 'Collaboration First',
									description:
										'We believe the best results come from open communication and shared ownership of outcomes.'
								},
								{
									title: 'Continuous Growth',
									description:
										'Every team member is encouraged to learn, experiment, and share knowledge with the team.'
								},
								{
									title: 'Quality Obsessed',
									description:
										'We take pride in our work and hold ourselves to high standards in everything we deliver.'
								}
							].map((item, index) => (
								<AnimatedSection key={index} delay={index * 0.1}>
									<div className="card h-full text-center">
										<div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
											<span className="text-accent-blue font-bold">{index + 1}</span>
										</div>
										<h3 className="heading-sm mb-3">{item.title}</h3>
										<p className="text-text-secondary text-sm">{item.description}</p>
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
