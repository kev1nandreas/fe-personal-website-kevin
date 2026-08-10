export const MAIN_ENDPOINT = {
	Auth: {
		Login: "/auth/login",
		CurrentUser: "/auth/me",
	},
	Projects: {
		FetchProjects: "/v1/projects",
		FetchProjectBySlug: (slug: string) => `/v1/projects/find/${slug}`,
	},
	Experiences: {
		FetchExperiences: "/v1/experiences",
	},
	Links: {
		FetchLinkBySlug: (slug: string) => `/v1/links/find/${slug}`,
	},
};
