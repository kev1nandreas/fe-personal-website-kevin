"use client";

import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api/main/call";
import { MAIN_ENDPOINT } from "@/services/api/main/endpoint";
import type { Experience, ExperienceListResponse } from "@/types/experience";

export function useExperiencesQuery() {
	return useQuery({
		queryKey: ["fetch.experiences"],
		queryFn: async (): Promise<Experience[]> => {
			const { Kind, OK } = await get<ExperienceListResponse>(
				MAIN_ENDPOINT.Experiences.FetchExperiences,
				{ page: 1, page_size: 100, sort: "date_start", order: "desc" },
			);

			if (!OK) {
				throw new Error(
					(Kind as ExperienceListResponse)?.message ??
						"Failed to fetch experiences.",
				);
			}

			return (Kind as ExperienceListResponse).data ?? [];
		},
		staleTime: 60_000,
	});
}
