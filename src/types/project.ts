import type { Metadata } from "@/types/api";

export interface Project {
	id: string;
	slug: string;
	title_id: string;
	title_en: string;
	subtitle_id: string;
	subtitle_en: string;
	description_id: string;
	description_en: string;
	tech_stack: string[];
	images: string[];
	highlights_id: string[];
	highlights_en: string[];
	improve_next_id: string;
	improve_next_en: string;
	ownership_type: string;
	url: string;
	github_url: string;
	thumbnail_url: string;
	is_finished: boolean;
	priority: number;
	created_at: string;
	updated_at: string;
}

export interface ProjectListResponse {
	success: boolean;
	message: string;
	data: Project[];
	meta: Metadata;
}

export interface ProjectDetailResponse {
	success: boolean;
	message: string;
	data: Project;
}
