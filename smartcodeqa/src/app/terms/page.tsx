import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'SmartCodeQA Terms of Service'
};

export default function TermsPage() {
	return (
		<>
			<Navbar />
			<main className="pt-20 md:pt-24 pb-20">
				<div className="container-custom max-w-3xl">
					<h1 className="heading-xl mb-8">Terms of Service</h1>
					<div className="prose prose-invert max-w-none">
						<p className="text-text-secondary">Last updated: April 2026</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Services</h2>
						<p className="text-text-secondary">
							SmartCodeQA provides quality assurance, automation, AI integration, web development, mobile development, and related technology services.
						</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Use of Website</h2>
						<p className="text-text-secondary">
							You may use this website for informational purposes. You agree not to misuse our services or attempt to gain unauthorized access.
						</p>
						<h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
						<p className="text-text-secondary">
							For questions about these terms, contact us at info@smartcodeqa.com.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
