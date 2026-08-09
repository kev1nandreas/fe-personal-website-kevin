"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { CardProject } from "@/components/card/CardProjects";
import { Typography } from "@/components/Typography";
import { useProjectsQuery } from "@/hooks/useProjectsQuery";
import { useTranslation } from "@/hooks/useTranslation";
import { pickLang } from "@/lib/pickLang";

export const Projects = () => {
	const { t, language } = useTranslation();
	const projectsT = t("projects");
	const { data: projects, isLoading, isError } = useProjectsQuery();

	return (
		<section
			id="projects"
			className="w-fit mx-auto px-6 md:px-12 py-16 scroll-mt-24"
		>
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

			{isLoading && (
				<Typography variant={"body"} className="text-muted text-center">
					Loading projects...
				</Typography>
			)}

			{isError && (
				<Typography variant={"body"} className="text-muted text-center">
					Couldn't load projects right now.
				</Typography>
			)}

			{!isLoading && !isError && projects?.length === 0 && (
				<Typography variant={"body"} className="text-muted text-center">
					No projects published yet.
				</Typography>
			)}

			<div className="flex flex-col gap-7">
				{projects?.map((project, index) => (
					<CardProject
						key={project.id}
						index={index}
						slug={project.slug}
						title={pickLang(language, project.title_en, project.title_id)}
						description={pickLang(
							language,
							project.description_en,
							project.description_id,
						)}
						techStack={project.tech_stack ?? []}
						link={project.url}
						github={project.github_url}
						image={project.thumbnail_url || "/image.png"}
						finished={project.is_finished}
					/>
				))}
			</div>
		</section>
	);
};
