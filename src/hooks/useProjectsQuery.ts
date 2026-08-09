"use client";

import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api/main/call";
import { MAIN_ENDPOINT } from "@/services/api/main/endpoint";
import type { Project, ProjectListResponse } from "@/types/project";

export function useProjectsQuery() {
	return useQuery({
		queryKey: ["fetch.projects"],
		queryFn: async (): Promise<Project[]> => {
			const { Kind, OK } = await get<ProjectListResponse>(
				MAIN_ENDPOINT.Projects.FetchProjects,
				{ page: 1, page_size: 100, sort: "priority", order: "asc" },
			);

			if (!OK) {
				throw new Error(
					(Kind as ProjectListResponse)?.message ?? "Failed to fetch projects.",
				);
			}

			return (Kind as ProjectListResponse).data ?? [];
		},
		staleTime: 60_000,
	});
}
