"use client";

import { Box } from "@mui/material";
import { Download } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Button from "@/components/button/Button";
import Stack from "@/components/card/CardStack";
import { Typography } from "@/components/Typography";
import { useTranslation } from "@/hooks/useTranslation";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export default function About() {
	const { t } = useTranslation();
	const aboutT = t("about");

	return (
		<section
			id="about"
			className="w-fit mx-auto px-6 md:px-12 py-16 scroll-mt-24"
		>
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
					{aboutT.title}{" "}
					<span
						className={`${dancingScript.className} font-bold italic text-accent-secondary`}
					>
						{aboutT.titleHighlight}
					</span>
				</Typography>
				<Typography variant={"body"} className="text-muted">
					{aboutT.subtitle}
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
						cards={photos.map((src) => (
							<Image
								key={src}
								src={src}
								alt={`photo-${src}`}
								className="w-full h-full object-cover pointer-events-none rounded-lg shadow-lg"
								width={300}
								height={300}
							/>
						))}
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
					<Typography className="text-muted w-full max-w-140 text-justify leading-relaxed">
						{aboutT.description}
					</Typography>
					<Button
						leftIcon={Download}
						variant="outline"
						className="w-fit px-8"
						onClick={() => window.open("/CV.pdf", "_blank")}
						rel="noopener noreferrer"
					>
						{aboutT.viewResume}
					</Button>
				</Box>
			</Box>
		</section>
	);
}

const photos = ["/myphoto/BambooKevin.jpg", "/myphoto/BeachKevin.jpg"];
