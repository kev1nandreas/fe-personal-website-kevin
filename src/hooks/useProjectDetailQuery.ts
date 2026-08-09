"use client";

import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api/main/call";
import { MAIN_ENDPOINT } from "@/services/api/main/endpoint";
import type { Project, ProjectDetailResponse } from "@/types/project";

export function useProjectDetailQuery(slug: string) {
	return useQuery({
		queryKey: ["fetch.project", slug],
		queryFn: async (): Promise<Project> => {
			const { Kind, OK } = await get<ProjectDetailResponse>(
				MAIN_ENDPOINT.Projects.FetchProjectBySlug(slug),
			);

			if (!OK) {
				throw new Error(
					(Kind as ProjectDetailResponse)?.message ?? "Project not found.",
				);
			}

			return (Kind as ProjectDetailResponse).data;
		},
		enabled: !!slug,
		retry: false,
	});
}
