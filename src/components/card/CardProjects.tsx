import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaFireAlt } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import Button from "../button/Button";
import { IconDescription } from "../IconDescriprion";
import { Typography } from "../Typography";

interface CardProjectProps {
	index: number;
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

	return (
		<div
			ref={divRef}
			className="flex flex-col justify-center items-center md:flex-row gap-15 p-5 rounded-2xl relative overflow-hidden hover:-translate-y-2 transition-all duration-600 ease-in-out"
			style={{ borderColor: "rgba(255, 255, 255, 0.05)", borderWidth: 1 }}
		>
			{index === 0 && (
				<div className="absolute flex select-none justify-center items-center bg-linear-to-r from-accent-secondary to-accent-secondary via-accent text-gray-700 h-fit w-80 font-semibold text-xl -rotate-45 -left-25 top-10">
					<FaFireAlt className="text-xl mr-2" />
					Latest
				</div>
			)}

			{/* Image Left */}
			<Image
				onClick={() => window.open(link)}
				src={image}
				alt={title}
				width={400}
				height={400}
				draggable={false}
				className={`pointer-events-none select-none border-2 rounded-2xl w-full object-cover md:w-fit md:h-fit cursor-pointer ${
					index % 2 === 0 ? "" : "md:hidden"
				}`}
			></Image>

			<div className="max-w-160 flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<Typography
						variant={"h4"}
						className={`text-2xl transition-all duration-1000 ease-in-out ${hover ? "underline underline-offset-4 decoration-accent-secondary/80 decoration-dashed" : ""}`}
					>
						{title}
					</Typography>

					{/* Work In Progress */}
					{finished === false && (
						<div className="flex items-center gap-2 text-slate-700 text-xs font-semibold bg-linear-to-r from-gray-500 to-gray-500 via-gray-300 p-1 px-3 max-w-40 justify-center rounded-lg">
							<IoIosConstruct className="text-lg" />
							In Progress
						</div>
					)}
				</div>

				<Typography
					variant={"body"}
					className="opacity-80 text-justify text-muted"
				>
					{description}
				</Typography>
				<div className="flex gap-2 items-center my-3">
					<Typography className="text-sm mr-3">Tech Stack: </Typography>
					{techStack.map((tech) => (
						<IconDescription key={tech} name={tech} size={"2xl"} />
					))}
				</div>
				<div
					className={`flex items-center ${
						github ? "justify-between" : "justify-end"
					}`}
				>
					{github && (
						<Link href={github} target="_blank">
							<IconDescription name={"github-r"} size={"lg"} />
						</Link>
					)}
					<Button
						variant={"outline"}
						className="flex gap-2"
						onClick={() => window.open(link)}
					>
						Visit Website{" "}
						<span>
							<FaArrowRight className="text-xl" />
						</span>
					</Button>
				</div>
			</div>

			{/* Image Right */}
			<Image
				onClick={() => window.open(link)}
				src={image}
				alt={title}
				width={400}
				height={400}
				draggable={false}
				className={`pointer-events-none select-none border-2 rounded-2xl w-full object-cover md:w-fit md:h-fit cursor-pointer ${
					index % 2 !== 0 ? "hidden md:block" : "hidden md:hidden"
				}`}
			/>
		</div>
	);
};
