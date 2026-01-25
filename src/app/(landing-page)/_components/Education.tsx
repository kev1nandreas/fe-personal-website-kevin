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

interface EducationItem {
	period: string;
	school: string;
	major: string;
	description: string;
}

export default function Education() {
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
					Education
				</Typography>
				<Typography variant={"body"} className="text-muted">
					My educational background and activities
				</Typography>
			</Box>

			<Timeline
				position="alternate-reverse"
				sx={{
					"@media (max-width: 768px)": {
						"& .MuiTimelineItem-root:before": {
							flex: 0,
							padding: 0,
						},
					},
				}}
			>
				{educationData.map((edu) => (
					<TimelineItem key={edu.school}>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								display: { xs: "none", md: "block" },
							}}
							align="right"
							color="text.secondary"
						>
							<Typography className="text-accent-secondary font-semibold">
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

						<TimelineContent sx={{ py: "12px", px: 2 }} maxWidth={"60rem"}>
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

const educationData: EducationItem[] = [
	{
		period: "2023 - Present",
		school: "Institut Teknologi Sepuluh Nopember",
		major: "Informatics Engineering | GPA: 3.75/4.00",
		description:
			"Sepuluh Nopember Institute of Technology stands out as a top institute in Indonesia for science and technology. I'm honored to be part of the informatics undergraduate program. Actively engaging in academics, various committees, and organizations, I continually develop my skills in a vibrant learning environment. Excited to contribute and thrive in this esteemed institution's rich academic and technological community.",
	},
	{
		period: "2020 - 2023",
		school: "SMA Darma Yudha",
		major: "Natural Science",
		description:
			"Darma Yudha Senior High School is one of the top schools in Riau, known for winning many awards in science and art. I'm in the Mathematics and Natural Science program. I'm part of the Geoscience Club and have won several competitions in geoscience. Being at Darma Yudha has been a great experience, and I'm proud to be part of a school that values excellence.",
	},
];
