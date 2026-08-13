"use client";

import { Box } from "@mui/material";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import { CardProject } from "@/components/card/CardProjects";
import { Typography } from "@/components/Typography";
import { useProjectsQuery } from "@/hooks/useProjectsQuery";
import { useTranslation } from "@/hooks/useTranslation";
import { pickLang } from "@/lib/pickLang";

interface ProjectsProps {
	limit?: number;
	showViewAll?: boolean;
}

export const Projects = ({ limit, showViewAll }: ProjectsProps) => {
	const { t, language } = useTranslation();
	const projectsT = t("projects");
	const { data: projects, isLoading, isError } = useProjectsQuery();

	const visibleProjects = limit ? projects?.slice(0, limit) : projects;

	return (
		<section
			id="projects"
			className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-16 scroll-mt-24"
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
					className="text-center w-full max-w-[20rem] h-28 text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out relative z-10"
				>
					<Image
						src="/assets/rectangle/hw-rectangle1.png"
						alt="rectangle-decoration"
						width={1000}
						height={1000}
						quality={100}
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
					{projectsT.loading}
				</Typography>
			)}

			{isError && (
				<Typography variant={"body"} className="text-muted text-center">
					{projectsT.error}
				</Typography>
			)}

			{!isLoading && !isError && projects?.length === 0 && (
				<Typography variant={"body"} className="text-muted text-center">
					{projectsT.empty}
				</Typography>
			)}

			<div className="flex flex-col gap-7">
				{visibleProjects?.map((project, index) => (
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

			{showViewAll && (projects?.length ?? 0) > (limit ?? 0) && (
				<div className="flex justify-center mt-10">
					<Link href="/projects">
						<Button variant={"outline"} className="flex gap-2">
							{projectsT.viewAll}
							<ArrowRight className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			)}
		</section>
	);
};
