"use client";

import { MoveDownIcon } from "lucide-react";
import { IconDescription } from "@/components/IconDescriprion";
import ModelViewer from "@/components/ModelViewer";
import { Typography } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";
import { socialLinks } from "@/lib/data";

export default function Hero() {
	const { t } = useTranslation();
	const heroT = t("hero");

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
						{heroT.greeting}
					</Typography>
				</div>

				<Typography variant="h1" className="text-center lg:text-left">
					{heroT.name}
				</Typography>

				<div className="flex flex-col gap-2 text-center lg:text-left">
					<Typography variant="h4" className="text-muted">
						{heroT.specializingIn}
					</Typography>
					<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
						<span className="highlight-web text-2xl md:text-3xl font-bold">
							{heroT.webDevelopment}
						</span>
						<span className="text-muted text-2xl">&</span>
						<span className="highlight-data text-2xl md:text-3xl font-bold">
							{heroT.datascience}
						</span>
					</div>
				</div>

				<Typography className="text-muted text-center lg:text-left max-w-md leading-relaxed">
					{heroT.description}
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

			<div className="relative z-10 hidden md:flex items-center justify-center">
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
						minZoom={1}
						maxZoom={3}
						backgroundColor="transparent"
					/>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
				<Typography className="text-sm text-muted">
					{heroT.scrollDown}
				</Typography>
				<MoveDownIcon className="text-muted" />
			</div>
		</section>
	);
}
