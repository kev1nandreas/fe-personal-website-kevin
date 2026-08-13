import type { Metadata } from "next";
import en from "@/locales/en.json";

export const metadata: Metadata = {
	title: en.experiences.title,
	description: en.experiences.subtitle,
};

export default function ExperiencesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
