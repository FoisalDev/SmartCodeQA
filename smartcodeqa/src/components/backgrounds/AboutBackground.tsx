'use client';

export function AboutBackground() {
	return (
		<div className="fixed inset-0 z-0 overflow-hidden">
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className="absolute inset-0 w-full h-full object-cover opacity-40"
			>
				<source src="https://assets.mixkit.co/videos/23282/23282-720.mp4" type="video/mp4" />
			</video>
			<div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/50 to-background/80" />
		</div>
	);
}
