"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
	FaGithub,
	FaInstagram,
	FaLaravel,
	FaLinkedin,
	FaReact,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { Typography } from "@/components/Typography";

interface IconDescriptionProps {
	name: string;
	size?: string;
	href?: string;
}

const iconMap: Record<string, { icon: IconType; desc: string }> = {
	next: { icon: SiNextdotjs, desc: "Next Js" },
	tailwind: { icon: RiTailwindCssFill, desc: "Tailwind CSS" },
	"github-r": { icon: FaGithub, desc: "Github Repository" },
	github: { icon: FaGithub, desc: "Github" },
	laravel: { icon: FaLaravel, desc: "Laravel" },
	react: { icon: FaReact, desc: "React Js" },
	instagram: { icon: FaInstagram, desc: "Instagram" },
	linkedin: { icon: FaLinkedin, desc: "Linkedin" },
	mail: { icon: IoMdMail, desc: "Email" },
};

export const IconDescription = ({
	name,
	size = "2xl",
	href,
}: IconDescriptionProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [showDesc, setShowDesc] = useState(false);
	const asset = iconMap[name];

	useEffect(() => {
		const element = ref.current;
		if (element) {
			const handleMouseEnter = () => setShowDesc(true);
			const handleMouseLeave = () => setShowDesc(false);

			element.addEventListener("mouseenter", handleMouseEnter);
			element.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				element.removeEventListener("mouseenter", handleMouseEnter);
				element.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, []);

	if (!asset) return null;

	const content = (
		<div
			className="flex items-center gap-2 h-8 transition-all duration-300 ease-in-out cursor-pointer group"
			ref={ref}
		>
			<asset.icon
				className={`text-${size} text-foreground group-hover:text-accent transition-colors duration-300`}
			/>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out h-fit ${
					showDesc ? "max-w-32 opacity-100" : "max-w-0 opacity-0"
				}`}
			>
				<Typography className="text-sm whitespace-nowrap text-muted">
					{asset.desc}
				</Typography>
			</div>
		</div>
	);

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block"
			>
				{content}
			</a>
		);
	}

	return content;
};
