"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box } from "@mui/material";
import { Typography } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";

export default function Education() {
	const { t } = useTranslation();
	const educationT = t("education");

	return (
		<section className="w-fit mx-auto px-6 md:px-12 py-16">
			<Box
				mb={8}
				gap={1}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems={"center"}
			>
				<Typography
					variant="h1"
					className="text-center text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out"
				>
					{educationT.title}
				</Typography>
				<Typography variant={"body"} className="text-muted">
					{educationT.subtitle}
				</Typography>
			</Box>

			<Timeline
				position="alternate-reverse"
				sx={{
					fontFamily: "inherit",
					"@media (max-width: 768px)": {
						"& .MuiTimelineItem-root:before": {
							flex: 0,
							padding: 0,
						},
					},
				}}
			>
				{educationT.items.map((edu) => (
					<TimelineItem key={edu.school}>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", md: "block" },
								fontFamily: "inherit",
							}}
							align="right"
						>
							<Typography
								variant="body"
								className="text-accent-secondary font-semibold"
							>
								{edu.period}
							</Typography>
						</TimelineOppositeContent>

						<TimelineSeparator>
							<TimelineConnector
								sx={{
									bgcolor: "rgb(var(--accent-secondary) / 0.3)",
								}}
							/>
							<TimelineDot
								sx={{
									bgcolor: "rgb(var(--accent-secondary))",
									border: "4px solid rgb(var(--background))",
									width: "20px",
									height: "20px",
									boxShadow: "none",
								}}
							/>
							<TimelineConnector
								sx={{
									bgcolor: "var(--accent-secondary) / 0.3",
								}}
							/>
						</TimelineSeparator>

						<TimelineContent
							sx={{ py: "12px", px: 2, fontFamily: "inherit" }}
							maxWidth={"60rem"}
						>
							<Box className="md:hidden mb-2">
								<Typography className="text-accent-secondary font-semibold">
									{edu.period}
								</Typography>
							</Box>
							<Typography variant={"h5"} className="font-bold text-foreground">
								{edu.school}
							</Typography>
							<Typography
								variant={"h6"}
								className="font-semibold mb-4 text-foreground/60"
							>
								{edu.major}
							</Typography>
							<Typography className="text-muted leading-relaxed">
								{edu.description}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
}
