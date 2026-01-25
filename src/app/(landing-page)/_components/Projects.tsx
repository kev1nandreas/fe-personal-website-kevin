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
		<section id="projects" className="w-fit mx-auto px-6 md:px-12 py-16">
			<Box
				mb={8}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems={"center"}
			>
				<Typography
					variant="h1"
					className="text-center w-[20rem] h-28 text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out relative z-10"
				>
					<Image
						src="/assets/rectangle/hw-rectangle1.png"
						alt="rectangle-decoration"
						width={1000}
						height={1000}
						draggable={false}
						priority={true}
						className="absolute pointer-events-none select-none w-full h-full -top-6 lg:-top-6"
					/>
					{projectsT.title}
				</Typography>
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
