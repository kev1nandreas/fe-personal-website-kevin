"use client";

import { Medal, Trophy } from "lucide-react";
import { CardAchievement } from "@/components/card/CardAchievement";
import { Typography } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export default function Achievements() {
	const { t } = useTranslation();
	const achievementsT = t("achievements");

	return (
		<section
			id="achievements"
			className="w-fit mx-auto px-6 md:px-12 py-16 flex justify-center items-start gap-20"
		>
			{/* Header */}
			<div className="mb-8 gap-1 flex flex-col justify-center text-left items-start max-w-120">
				<Typography
					variant={"h1"}
					className="text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out"
				>
					{achievementsT.title}
				</Typography>
				<Typography variant={"body"} className="text-muted">
					{achievementsT.subtitle}
				</Typography>

				<div className="hidden lg:flex gap-8 mt-12 text-accent-secondary opacity-20 hover:opacity-40 transition-all duration-300 ease-in-out">
					<Trophy className="-rotate-12 w-64 h-64" strokeWidth={1.5} />
					<Medal className="rotate-12 mt-20 w-56 h-56" strokeWidth={1.5} />
				</div>
			</div>

			{/* Achievements List */}
			<div className="flex flex-col items-center justify-center gap-4 max-w-250 mx-auto">
				{achievementsT.items.map((achievement) => (
					<CardAchievement
						key={achievement.name}
						name={achievement.name}
						issuer={achievement.issuer}
						description={achievement.description}
						date={achievement.date}
					/>
				))}
			</div>
		</section>
	);
}
