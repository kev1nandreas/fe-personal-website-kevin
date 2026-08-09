import type { Metadata } from "@/types/api";

export interface Experience {
	id: string;
	title_id: string;
	title_en: string;
	date_start: string;
	date_end: string;
	company_id: string;
	company_en: string;
	description_id: string;
	description_en: string;
	is_active: boolean;
	is_volunteer: boolean;
	priority: number;
	created_at: string;
	updated_at: string;
}

export interface ExperienceListResponse {
	success: boolean;
	message: string;
	data: Experience[];
	meta: Metadata;
}
