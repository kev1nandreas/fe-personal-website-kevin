/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import { Typography } from "../Typography";

interface CardAchievementProps {
	name: string;
	issuer: string;
	description: string;
	date?: string;
}

export const CardAchievement = ({
	name,
	issuer,
	description,
}: CardAchievementProps) => {
	const divRef = useRef<HTMLDivElement>(null);
	const [showDesc, setShowDesc] = useState(false);

	useEffect(() => {
		if (divRef.current) {
			divRef.current.addEventListener("mouseenter", () => {
				setShowDesc(true);
			});
			divRef.current.addEventListener("mouseleave", () => {
				setShowDesc(false);
			});
		}
	});

	return (
		<div
			ref={divRef}
			className="flex flex-col p-6 rounded-xl border-2 w-full gap-2 transition-all duration-300 max-w-148"
			style={{ borderColor: "rgb(var(--foreground) / 0.1)" }}
		>
			<Typography
				variant={"h5"}
				className={`font-bold text-foreground underline-offset-4 decoration-accent-secondary/80 decoration-2 ${
					showDesc && "md:underline"
				}`}
			>
				{name}
			</Typography>
			<Typography className="text-base font-semibold text-foreground/60">
				{issuer}
			</Typography>
			<Typography
				variant={"body"}
				className={`text-muted leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${
					showDesc ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
				}`}
			>
				{description}
			</Typography>
		</div>
	);
};
