"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "@/components/button/Button";
import Carousel from "@/components/Carousel";
import { IconDescription } from "@/components/IconDescriprion";
import { Typography } from "@/components/Typography";
import { useProjectDetailQuery } from "@/hooks/useProjectDetailQuery";
import { useTranslation } from "@/hooks/useTranslation";
import { pickLang } from "@/lib/pickLang";

export default function ProjectDetailPage() {
	const params = useParams<{ slug: string }>();
	const { language } = useTranslation();
	const {
		data: project,
		isLoading,
		isError,
	} = useProjectDetailQuery(params.slug);

	if (isLoading) {
		return (
			<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-32">
				<Typography variant={"body"} className="text-muted text-center">
					Loading project...
				</Typography>
			</section>
		);
	}

	if (isError || !project) {
		return (
			<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-32 text-center">
				<Typography variant={"h4"}>Project not found</Typography>
				<Link href="/#projects" className="inline-block mt-6">
					<Button variant={"outline"} leftIcon={ArrowLeft}>
						Back to Projects
					</Button>
				</Link>
			</section>
		);
	}

	const title = pickLang(language, project.title_en, project.title_id);
	const subtitle = pickLang(language, project.subtitle_en, project.subtitle_id);
	const description = pickLang(
		language,
		project.description_en,
		project.description_id,
	);
	const highlights = pickLang(
		language,
		project.highlights_en,
		project.highlights_id,
	);
	const improveNext = pickLang(
		language,
		project.improve_next_en,
		project.improve_next_id,
	);
	let galleryImages: string[] = [];
	if (project.images?.length > 0) {
		galleryImages = project.images;
	} else if (project.thumbnail_url) {
		galleryImages = [project.thumbnail_url];
	}

	return (
		<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-28 scroll-mt-24">
			<Link href="/#projects" className="inline-block mb-8">
				<Button variant={"ghost"} leftIcon={ArrowLeft}>
					Back to Projects
				</Button>
			</Link>

			<Carousel images={galleryImages} alt={title} />

			<div className="flex items-center gap-3 mb-2 flex-wrap">
				<Typography variant={"h2"}>{title}</Typography>
				{project.is_finished === false && (
					<span className="text-xs font-semibold px-3 py-1 rounded-lg bg-gray-500/20 text-muted">
						In Progress
					</span>
				)}
			</div>

			{subtitle && (
				<Typography variant={"body"} className="text-accent-secondary mb-6">
					{subtitle}
				</Typography>
			)}

			<Typography
				variant={"body"}
				className="text-muted text-justify [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 mb-8"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: description is CMS-authored HTML, not user-generated
				dangerouslySetInnerHTML={{ __html: description }}
			/>

			{project.tech_stack?.length > 0 && (
				<div className="mb-8">
					<Typography variant={"h6"} className="mb-3">
						Stack
					</Typography>
					<div className="flex flex-wrap gap-3">
						{project.tech_stack.map((tech) => (
							<span
								key={tech}
								className="text-sm font-medium px-3 py-1.5 rounded-full border border-foreground/15"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			)}

			{highlights?.length > 0 && (
				<div className="mb-8">
					<Typography variant={"h6"} className="mb-3">
						Engineering Highlights
					</Typography>
					<ul className="list-disc pl-5 space-y-2 text-muted">
						{highlights.map((h) => (
							<li key={h}>{h}</li>
						))}
					</ul>
				</div>
			)}

			{improveNext && (
				<div className="mb-8">
					<Typography variant={"h6"} className="mb-3">
						What I'd Improve Next
					</Typography>
					<Typography
						variant={"body"}
						className="text-muted [&_p]:mb-2"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: CMS-authored HTML, not user-generated
						dangerouslySetInnerHTML={{ __html: improveNext }}
					/>
				</div>
			)}

			<div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
				{project.github_url && (
					<IconDescription
						name="github-r"
						size="xl"
						href={project.github_url}
					/>
				)}
				{project.url && (
					<Link href={project.url} target="_blank" rel="noopener noreferrer">
						<Button variant={"outline"} rightIcon={ExternalLink}>
							Visit Website
						</Button>
					</Link>
				)}
			</div>
		</section>
	);
}
