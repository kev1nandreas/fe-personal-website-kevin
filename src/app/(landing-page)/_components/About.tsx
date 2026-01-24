"use client";

import { Box } from "@mui/material";
import { Download } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Button from "@/components/button/Button";
import Stack from "@/components/card/CardStack";
import { Typography } from "@/components/Typography";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export default function About() {
	return (
		<section className="w-fit mx-auto px-6 md:px-12 py-16">
			<Box
				mb={4}
				gap={1}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems={"center"}
			>
				<Typography
					variant="h1"
					className="text-center hover:tracking-wider transition-all duration-300 ease-in-out"
				>
					About{" "}
					<span
						className={`${dancingScript.className} font-bold italic text-accent-secondary`}
					>
						Me
					</span>
				</Typography>
				<Typography variant={"body"} className="text-muted">
					Know more about me in this section
				</Typography>
			</Box>

			<Box display={"flex"} gap={8} flexDirection={{ xs: "column", md: "row" }}>
				<Box
					sx={{
						width: { sx: 200, md: 300 },
						height: { sx: 200, md: 300 },
					}}
					mx="auto"
				>
					<Stack
						randomRotation={false}
						sensitivity={200}
						sendToBackOnClick={true}
						autoplay
						autoplayDelay={3000}
						pauseOnHover
					/>
				</Box>

				<Box
					flex={1}
					display="flex"
					flexDirection="column"
					gap={3}
					justifyContent="center"
				>
					<Typography className="text-muted w-full max-w-[35rem] text-justify leading-relaxed">
						I’m an Informatics student with a strong interest in frontend
						engineering and data science. I enjoy building production-ready web
						applications using Next.js, Laravel, Python, and SQL. I also have
						experience in data analysis, machine learning, and research through
						projects at the Information Intelligent Management Laboratory. I’m a
						scholarship awardee with leadership and competition experience in
						data-related fields.
					</Typography>
					<Button
						leftIcon={Download}
						variant="outline"
						className="w-fit px-[2rem]"
						onClick={() => {}}
						rel="noopener noreferrer"
					>
						View Resume
					</Button>
				</Box>
			</Box>
		</section>
	);
}
