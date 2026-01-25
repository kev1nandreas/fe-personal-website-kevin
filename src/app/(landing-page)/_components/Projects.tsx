"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { CardProject } from "@/components/card/CardProjects";
import { Typography } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export const Projects = () => {
	const { t } = useTranslation();
	const projectsT = t("projects");

	return (
		<section
			id="projects"
			className="w-fit mx-auto px-6 md:px-12 py-16 relative"
		>
			<Box
				mb={8}
				gap={1}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems={"center"}
			>
				<div className="relative">
					<Image
						src="/assets/circle/hw-circle3.png"
						alt="circle-decoration"
						width={120}
						height={120}
						draggable={false}
						priority={true}
						className="absolute pointer-events-none select-none -top-8 -left-12 opacity-80"
					/>
					<Typography
						variant="h1"
						className="text-center text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out relative z-10"
					>
						{projectsT.title}
					</Typography>
				</div>
				<Typography variant={"body"} className="text-muted">
					{projectsT.subtitle}
				</Typography>
			</Box>

			<div className="flex flex-col gap-7">
				{projectsT.items.map((project, index) => (
					<CardProject
						key={project.title}
						index={index}
						title={project.title}
						description={project.description}
						techStack={project.techStack}
						link={project.link}
						github={project.github}
						image={project.image}
						finished={project.finished}
					/>
				))}
			</div>
		</section>
	);
};
