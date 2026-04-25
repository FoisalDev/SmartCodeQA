import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { ContactBackground } from '@/components/backgrounds';

export const metadata: Metadata = {
	title: 'Contact Us',
	description:
		'Get in touch with SmartCodeQA. Whether you need QA support, automation, AI integration, or product development, we are ready to help you ship quality products faster.'
};

export default function ContactPage() {
	return (
		<>
			<ContactBackground />
			<Navbar />
			<main className="relative z-10">
				<section className="pt-20 md:pt-24 pb-20">
					<div className="container-custom">
						<div className="text-center max-w-3xl mx-auto">
							<span className="inline-block text-sm font-medium uppercase tracking-wider text-accent-blue mb-4">
								Get in Touch
							</span>
							<h1 className="heading-xl mb-6">
								Let&apos;s start your <span className="text-gradient">project together</span>
							</h1>
							<p className="text-text-secondary text-lg">
								Have a project in mind? We&apos;d love to hear about it. Send us a message and
								we&apos;ll get back to you within 24 hours.
							</p>
						</div>
					</div>
				</section>
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
