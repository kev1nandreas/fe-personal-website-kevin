import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { useTranslation } from "@/hooks/useTranslation";
import Button from "../button/Button";
import { Typography } from "../Typography";

interface CardProjectProps {
	index: number;
	slug: string;
	title: string;
	description: string;
	techStack: string[];
	link: string;
	github?: string;
	image: string;
	finished?: boolean;
}

export const CardProject = ({
	index,
	slug,
	title,
	description,
	techStack,
	link,
	github,
	image,
	finished,
}: CardProjectProps) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [hover, setHover] = useState(false);
	const { t } = useTranslation();
	const commonT = t("common");

	useEffect(() => {
		if (divRef.current) {
			divRef.current.addEventListener("mouseenter", () => {
				setHover(true);
			});
			divRef.current.addEventListener("mouseleave", () => {
				setHover(false);
			});
		}
	});

	// Container sizes to the image's own aspect ratio (capped at w-100) so
	// nothing gets cropped or letterboxed.
	const thumbnail = (
		<div className="w-full md:w-100 shrink-0 rounded-2xl overflow-hidden border-2 border-foreground/15">
			<Image
				src={image}
				alt={title}
				width={1600}
				height={1200}
				quality={100}
				draggable={false}
				className="pointer-events-none select-none w-full h-auto"
			/>
		</div>
	);

	return (
		<div
			ref={divRef}
			className="w-full flex flex-col justify-center items-center md:flex-row gap-6 md:gap-15 p-4 sm:p-5 rounded-2xl relative overflow-hidden hover:-translate-y-2 transition-all duration-600 ease-in-out"
			style={{ borderColor: "rgb(var(--foreground) / 0.2)", borderWidth: 1 }}
		>
			{/* Image Left */}
			<Link
				href={`/projects/${slug}`}
				className={`block w-full md:w-fit ${index % 2 === 0 ? "" : "md:hidden"}`}
			>
				{thumbnail}
			</Link>

			<div className="max-w-160 min-w-0 w-full flex flex-col gap-4">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<Link href={`/projects/${slug}`}>
						<Typography
							variant={"h4"}
							className={`text-xl sm:text-2xl transition-all duration-1000 ease-in-out ${hover ? "underline underline-offset-4 decoration-accent-secondary/80 decoration-dashed" : ""}`}
						>
							{title}
						</Typography>
					</Link>

					{/* Work In Progress */}
					{finished === false && (
						<div className="flex items-center gap-2 text-slate-700 text-xs font-semibold bg-linear-to-r from-gray-500 to-gray-500 via-gray-300 p-1 px-3 max-w-40 justify-center rounded-lg">
							<IoIosConstruct className="text-lg" />
							{commonT.inProgress}
						</div>
					)}
				</div>

				<Typography
					variant={"body"}
					className="rich-text opacity-80 text-justify text-muted line-clamp-4"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: description is CMS-authored HTML, not user-generated
					dangerouslySetInnerHTML={{ __html: description }}
				/>
				<div className="flex flex-wrap gap-2 my-1">
					{(techStack ?? []).map((tech) => (
						<span
							key={tech}
							className="text-xs font-medium px-2.5 py-1 rounded-full border border-foreground/15 text-muted"
						>
							{tech}
						</span>
					))}
				</div>
				<div className="flex flex-wrap items-center justify-between gap-3">
					{github && (
						<Link href={github} target="_blank" aria-label="GitHub repository">
							<FaGithub className="text-2xl text-foreground hover:text-accent transition-colors duration-300" />
						</Link>
					)}
					<div className="flex flex-wrap gap-2 items-center ml-auto">
						<Link href={`/projects/${slug}`}>
							<Button variant={"ghost"} className="flex gap-2">
								{commonT.viewDetails}
							</Button>
						</Link>
						{link && (
							<Button
								variant={"outline"}
								className="flex gap-2"
								onClick={() => window.open(link)}
							>
								{commonT.visitWebsite}{" "}
								<span>
									<FaArrowRight className="text-xl" />
								</span>
							</Button>
						)}
					</div>
				</div>
			</div>

			{/* Image Right */}
			<Link
				href={`/projects/${slug}`}
				className={`hidden w-full md:w-fit ${index % 2 !== 0 ? "md:block" : "md:hidden"}`}
			>
				{thumbnail}
			</Link>
		</div>
	);
};
