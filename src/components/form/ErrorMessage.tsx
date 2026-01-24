import { Typography } from "../Typography";

export default function ErrorMessage({
	children,
	className,
}: {
	children: string;
	className?: string;
}) {
	return (
		<div className="flex space-x-1">
			<Typography
				variant="body"
				className={`text-xs !leading-tight text-red-500 ${className}`}
			>
				{children}
			</Typography>
		</div>
	);
}
