import type { Metadata } from "next";
import en from "@/locales/en.json";

export const metadata: Metadata = {
	title: en.projects.title,
	description: en.projects.subtitle,
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
