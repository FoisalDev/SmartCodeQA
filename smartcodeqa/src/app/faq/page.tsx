import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
	title: 'FAQ',
	description: 'Frequently Asked Questions about SmartCodeQA'
};

const faqs = [
	{
		question: 'What services does SmartCodeQA offer?',
		answer: 'We offer QA Testing, AI Apps & Integrations, Mobile Development, Web Development, Blockchain & NFT solutions, and Desktop Applications.'
	},
	{
		question: 'How can I get started?',
		answer: 'You can contact us through our contact form, email us at info@smartcodeqa.com, or book a call through our website.'
	},
	{
		question: 'What industries do you work with?',
		answer: 'We work across web, mobile, SaaS, AI, blockchain, and custom software environments with startups, agencies, and growing businesses.'
	},
	{
		question: 'Do you offer ongoing support?',
		answer: 'Yes, we offer flexible engagement models and ongoing support packages tailored to your needs.'
	}
];

export default function FAQPage() {
	return (
		<>
			<Navbar />
			<main className="pt-32 pb-20">
				<div className="container-custom max-w-3xl">
					<h1 className="heading-xl mb-8">Frequently Asked Questions</h1>
					<div className="space-y-6">
						{faqs.map((faq, index) => (
							<div key={index} className="card">
								<h3 className="heading-sm mb-3">{faq.question}</h3>
								<p className="text-text-secondary">{faq.answer}</p>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
