"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Button from "@/components/button/Button";
import { Experiences } from "../_components/Experiences";

export default function ExperiencesPage() {
	return (
		<div className="pt-16">
			<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
				<Link href="/#experiences" className="inline-block mt-8">
					<Button variant={"ghost"} leftIcon={ArrowLeft}>
						Back to Home
					</Button>
				</Link>
			</div>

			<Experiences />
		</div>
	);
}
