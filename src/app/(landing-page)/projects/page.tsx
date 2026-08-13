"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "@/components/button/Button";
import { useTranslation } from "@/hooks/useTranslation";
import { Projects } from "../_components/Projects";

export default function ProjectsPage() {
	const { t } = useTranslation();
	const commonT = t("common");

	return (
		<div className="pt-16">
			<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
				<Link href="/#projects" className="inline-block mt-8">
					<Button variant={"ghost"} leftIcon={ArrowLeft}>
						{commonT.backToHome}
					</Button>
				</Link>
			</div>

			<Projects />
		</div>
	);
}
