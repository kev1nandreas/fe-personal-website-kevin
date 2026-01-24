"use client";

import { IconDescription } from "@/components/IconDescriprion";
import ModelViewer from "@/components/ModelViewer";
import { Typography } from "@/components/Typography";
import { socialLinks } from "@/lib/data";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-6 md:p-12 overflow-hidden"
		>
			{/* Background Gradient Orbs */}
			<div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

			<div className="flex flex-col items-center lg:items-start gap-6 z-10 max-w-xl">
				<div className="flex items-center gap-2">
					<span className="text-2xl">👋</span>
					<Typography variant="h6" className="text-muted">
						Hello, I&apos;m
					</Typography>
				</div>

				<Typography variant="h1" className="text-center lg:text-left">
					Kevin Andreas
				</Typography>

				<div className="flex flex-col gap-2 text-center lg:text-left">
					<Typography variant="h4" className="text-muted">
						Specializing in
					</Typography>
					<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
						<span className="highlight-web text-2xl md:text-3xl font-bold">
							Web Development
						</span>
						<span className="text-muted text-2xl">&</span>
						<span className="highlight-data text-2xl md:text-3xl font-bold">
							Data Science
						</span>
					</div>
				</div>

				<Typography className="text-muted text-center lg:text-left max-w-md leading-relaxed">
					Passionate about building modern web applications and extracting
					meaningful insights from data. I love turning complex problems into
					elegant solutions.
				</Typography>

				<div className="flex items-center gap-6 mt-4">
					{socialLinks.map((link) => (
						<IconDescription
							key={link.label}
							name={link.label}
							size="2xl"
							href={link.href}
						/>
					))}
				</div>
			</div>

			<div className="relative z-10">
				<div className="relative">
					<div className="absolute inset-0 bg-linear-to-r from-accent/30 to-accent-secondary/30 rounded-full blur-3xl scale-75" />
					<ModelViewer
						url="/model/scene.glb"
						width={500}
						height={500}
						rotationX={10}
						rotationY={-30}
						rotationZ={0}
						cameraDistance={2}
						minZoom={2}
						maxZoom={2}
						backgroundColor="transparent"
					/>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
				<Typography className="text-sm text-muted">Scroll Down</Typography>
				<svg
					className="w-5 h-5 text-muted"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Scroll Down Arrow</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}
