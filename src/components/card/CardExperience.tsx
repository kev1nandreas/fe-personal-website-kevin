import { Typography } from "../Typography";

interface CardExperienceProps {
	date: string;
	title: string;
	company: string;
	/** Rich-text HTML authored in the CMS (react-quill output). */
	description: string;
}

export const CardExperience = ({
	date,
	title,
	company,
	description,
}: CardExperienceProps) => {
	return (
		<div className="flex flex-col lg:flex-row gap-10">
			<Typography
				variant={"h7"}
				className="opacity-50 lg:w-60 text-accent-secondary"
			>
				{date}
			</Typography>
			<div className="lg:w-160">
				<Typography variant={"h5"}>{title}</Typography>
				<Typography variant={"body"} className="text-muted">
					{company}
				</Typography>
				<Typography
					variant={"body"}
					className="opacity-80 mt-3 ml-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 text-justify"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: description is CMS-authored HTML, not user-generated
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
		</div>
	);
};
