import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen flex items-center justify-center">
				<div className="container-custom text-center">
					<div className="max-w-2xl mx-auto">
						<div className="text-8xl md:text-9xl font-bold text-gradient mb-8">404</div>
						<h1 className="heading-lg mb-4">Page Not Found</h1>
						<p className="text-text-secondary text-lg mb-8">
							The page you&apos;re looking for doesn&apos;t exist or has been moved.
						</p>
						<Link href="/" className="btn-primary group">
							Back to Home
							<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
