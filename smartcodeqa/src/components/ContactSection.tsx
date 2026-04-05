'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionLabel } from '@/components/ui/SectionLabel';

const services = [
	'QA Testing',
	'AI Apps & Integrations',
	'Mobile Development',
	'Web Development',
	'Blockchain & NFT',
	'Desktop Applications',
	'Other'
];

const budgets = [
	'Under $1,000',
	'$1,000 - $5,000',
	'$5,000 - $10,000',
	'$10,000 - $50,000',
	'$50,000+'
];

export function ContactSection() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		company: '',
		service: '',
		budget: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validate = () => {
		const newErrors: Record<string, string> = {};
		if (!formState.name.trim()) newErrors.name = 'Name is required';
		if (!formState.email.trim()) newErrors.email = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
			newErrors.email = 'Invalid email format';
		if (!formState.message.trim()) newErrors.message = 'Message is required';
		return newErrors;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		setErrors({});
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formState),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			setIsSubmitted(true);
		} catch (error) {
			setErrors({ message: 'Failed to send message. Please try again.' });
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
	};

	return (
		<section className="section-padding bg-surface/50" id="contact">
			<div className="container-custom">
				<AnimatedSection className="text-center mb-16">
					<SectionLabel>Get in Touch</SectionLabel>
					<h2 className="heading-lg mb-4">
						Let&apos;s start your <span className="text-gradient">project together</span>
					</h2>
					<p className="text-text-secondary max-w-2xl mx-auto">
						Have a project in mind? We&apos;d love to hear about it. Send us a message and
						we&apos;ll get back to you within 24 hours.
					</p>
				</AnimatedSection>

				<div className="grid lg:grid-cols-2 gap-12">
					<AnimatedSection className="lg:col-span-1">
						<div className="card h-full">
							<AnimatePresence mode="wait">
								{isSubmitted ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										className="text-center py-12"
									>
										<div className="w-20 h-20 rounded-full bg-accent-emerald/20 flex items-center justify-center mx-auto mb-6">
											<CheckCircle2 className="w-10 h-10 text-accent-emerald" />
										</div>
										<h3 className="heading-md mb-4">Message Sent Successfully!</h3>
										<p className="text-text-secondary">
											Thank you for reaching out. We&apos;ll get back to you soon.
										</p>
									</motion.div>
								) : (
									<motion.form
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										onSubmit={handleSubmit}
										className="space-y-6"
									>
										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<label className="block text-sm font-medium text-text-primary mb-2">
													Full Name
												</label>
												<input
													type="text"
													name="name"
													value={formState.name}
													onChange={handleChange}
													className={`input-field ${errors.name ? 'border-red-500' : ''}`}
													placeholder="Your name"
												/>
												{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
											</div>
											<div>
												<label className="block text-sm font-medium text-text-primary mb-2">
													Email Address
												</label>
												<input
													type="email"
													name="email"
													value={formState.email}
													onChange={handleChange}
													className={`input-field ${errors.email ? 'border-red-500' : ''}`}
													placeholder="Your email"
												/>
												{errors.email && (
													<p className="text-red-500 text-sm mt-1">{errors.email}</p>
												)}
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<label className="block text-sm font-medium text-text-primary mb-2">
													Company
												</label>
												<input
													type="text"
													name="company"
													value={formState.company}
													onChange={handleChange}
													className="input-field"
													placeholder="Your company name"
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-text-primary mb-2">
													Service Needed
												</label>
												<select
													name="service"
													value={formState.service}
													onChange={handleChange}
													className="input-field"
												>
													<option value="">Select a service</option>
													{services.map((service) => (
														<option key={service} value={service}>
															{service}
														</option>
													))}
												</select>
											</div>
										</div>

										<div>
											<label className="block text-sm font-medium text-text-primary mb-2">
												Message
											</label>
											<textarea
												name="message"
												value={formState.message}
												onChange={handleChange}
												rows={5}
												className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
												placeholder="Tell us about your project..."
											/>
											{errors.message && (
												<p className="text-red-500 text-sm mt-1">{errors.message}</p>
											)}
										</div>

										<button type="submit" disabled={isSubmitting} className="btn-primary w-full">
											{isSubmitting ? (
												<>
													<Loader2 className="w-4 h-4 mr-2 animate-spin" />
													Sending...
												</>
											) : (
												<>
													<Send className="w-4 h-4 mr-2" />
													Send Message
												</>
											)}
										</button>
									</motion.form>
								)}
							</AnimatePresence>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.2} className="lg:col-span-1 space-y-6">
						<div className="card">
							<h3 className="heading-sm mb-6">Contact Information</h3>
							<div className="space-y-4">
								<a
									href="mailto:info@smartcodeqa.com"
									className="flex items-start gap-4 text-text-secondary hover:text-accent-blue transition-colors"
								>
									<div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
										<Mail className="w-5 h-5 text-accent-blue" />
									</div>
									<div>
										<div className="text-sm text-text-muted">Email</div>
										<div>info@smartcodeqa.com</div>
									</div>
								</a>
								<a
									href="tel:+8801718192949"
									className="flex items-start gap-4 text-text-secondary hover:text-accent-blue transition-colors"
								>
									<div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
										<Phone className="w-5 h-5 text-accent-blue" />
									</div>
									<div>
										<div className="text-sm text-text-muted">Phone</div>
										<div>+880 1718-192949</div>
									</div>
								</a>
								<div className="flex items-start gap-4 text-text-secondary">
									<div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
										<MapPin className="w-5 h-5 text-accent-blue" />
									</div>
									<div>
										<div className="text-sm text-text-muted">Address</div>
										<div>
											Sherpur, Bogura
											<br />
											Bangladesh
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card aspect-video">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.123456789!2d89.6!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA4OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
								width="100%"
								height="100%"
								style={{
									border: 0,
									borderRadius: '12px',
									filter: 'invert(90%) hue-rotate(180deg)'
								}}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="SmartCodeQA Location"
							/>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
