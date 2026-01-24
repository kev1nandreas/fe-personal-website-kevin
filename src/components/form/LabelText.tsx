import type { ReactNode } from "react";

import clsxm from "@/lib/clsxm";
import { Typography } from "../Typography";

export default function LabelText({
	children,
	labelTextClasname,
	required,
}: {
	children: ReactNode;
	labelTextClasname?: string;
	required?: boolean;
}) {
	return (
		<Typography
			variant="body"
			className={clsxm("text-sm text-gray-900", labelTextClasname)}
		>
			{children} {required && <span className="text-red-500">*</span>}
		</Typography>
	);
}
