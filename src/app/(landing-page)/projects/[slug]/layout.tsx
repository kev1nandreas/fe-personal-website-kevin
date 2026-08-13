import type { Metadata } from "next";
import { get } from "@/services/api/main/call";
import { MAIN_ENDPOINT } from "@/services/api/main/endpoint";
import type { Project, ProjectDetailResponse } from "@/types/project";

function stripHtml(html: string): string {
	return html
		.replace(/<[^>]*>/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const { Kind, OK } = await get<ProjectDetailResponse>(
		MAIN_ENDPOINT.Projects.FetchProjectBySlug(slug),
	);

	if (!OK) {
		return { title: "Project not found" };
	}

	const project = (Kind as ProjectDetailResponse).data as Project;

	return {
		title: project.title_en,
		description:
			stripHtml(project.description_en).slice(0, 160) || project.subtitle_en,
		openGraph: {
			title: project.title_en,
			description: project.subtitle_en,
			images: project.thumbnail_url ? [project.thumbnail_url] : undefined,
		},
	};
}

export default function ProjectDetailLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
