"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { Briefcase, Heart } from "lucide-react";
import { useMemo, useState } from "react";
import { CardExperience } from "@/components/card/CardExperience";
import { Typography } from "@/components/Typography";
import { useExperiencesQuery } from "@/hooks/useExperiencesQuery";
import { useTranslation } from "@/hooks/useTranslation";
import { pickLang } from "@/lib/pickLang";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`experience-tabpanel-${index}`}
			aria-labelledby={`experience-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
		</div>
	);
}

function formatDateRange(
	dateStart: string,
	dateEnd: string | null | undefined,
	language: "en" | "id",
) {
	const locale = language === "id" ? "id-ID" : "en-US";
	const formatter = new Intl.DateTimeFormat(locale, {
		month: "long",
		year: "numeric",
	});

	const start = formatter.format(new Date(dateStart));
	if (!dateEnd || dateEnd.startsWith("0001-01-01")) {
		return `${start} - ${language === "id" ? "Sekarang" : "Present"}`;
	}
	return `${start} - ${formatter.format(new Date(dateEnd))}`;
}

export const Experiences = () => {
	const [tabValue, setTabValue] = useState(0);
	const { t, language } = useTranslation();
	const experiencesT = t("experiences");
	const { data: experiences, isLoading, isError } = useExperiencesQuery();

	const work = useMemo(
		() => experiences?.filter((exp) => !exp.is_volunteer) ?? [],
		[experiences],
	);
	const volunteering = useMemo(
		() => experiences?.filter((exp) => exp.is_volunteer) ?? [],
		[experiences],
	);

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<section
			id="experiences"
			className="w-full mx-auto px-6 md:px-12 py-16 relative overflow-hidden scroll-mt-24"
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
					className="text-center text-accent-secondary hover:tracking-wider transition-all duration-300 ease-in-out"
				>
					{experiencesT.title}
				</Typography>
				<Typography variant={"body"} className="text-muted">
					{experiencesT.subtitle}
				</Typography>

				<div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
			</Box>

			{isLoading && (
				<Typography variant={"body"} className="text-muted text-center">
					Loading experiences...
				</Typography>
			)}

			{isError && (
				<Typography variant={"body"} className="text-muted text-center">
					Couldn't load experiences right now.
				</Typography>
			)}

			{!isLoading && !isError && (
				<Box sx={{ width: "100%", maxWidth: "800px", mx: "auto" }}>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: "rgb(var(--accent-secondary) / 0.2)",
						}}
					>
						<Tabs
							value={tabValue}
							onChange={handleTabChange}
							aria-label="experience tabs"
							centered
							sx={{
								"& .MuiTabs-indicator": {
									backgroundColor: "rgb(var(--accent-secondary))",
								},
								"& .MuiTab-root": {
									color: "rgb(var(--muted))",
									fontFamily: "inherit",
									textTransform: "none",
									fontSize: "1rem",
									fontWeight: 500,
									"&.Mui-selected": {
										color: "rgb(var(--accent-secondary))",
									},
									"&:hover": {
										color: "rgb(var(--accent-secondary))",
										opacity: 0.8,
									},
								},
							}}
						>
							<Tab
								icon={<Briefcase className="w-5 h-5" />}
								iconPosition="start"
								label={experiencesT.tabs.work}
							/>
							<Tab
								icon={<Heart className="w-5 h-5" />}
								iconPosition="start"
								label={experiencesT.tabs.volunteering}
							/>
						</Tabs>
					</Box>

					<TabPanel value={tabValue} index={0}>
						<div className="flex flex-col gap-7">
							{work.map((exp) => (
								<CardExperience
									key={exp.id}
									date={formatDateRange(exp.date_start, exp.date_end, language)}
									title={pickLang(language, exp.title_en, exp.title_id)}
									company={pickLang(language, exp.company_en, exp.company_id)}
									description={pickLang(
										language,
										exp.description_en,
										exp.description_id,
									)}
								/>
							))}
						</div>
					</TabPanel>

					<TabPanel value={tabValue} index={1}>
						<div className="flex flex-col gap-7">
							{volunteering.map((exp) => (
								<CardExperience
									key={exp.id}
									date={formatDateRange(exp.date_start, exp.date_end, language)}
									title={pickLang(language, exp.title_en, exp.title_id)}
									company={pickLang(language, exp.company_en, exp.company_id)}
									description={pickLang(
										language,
										exp.description_en,
										exp.description_id,
									)}
								/>
							))}
						</div>
					</TabPanel>
				</Box>
			)}
		</section>
	);
};
