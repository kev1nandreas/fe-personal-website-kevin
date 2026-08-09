"use client";

import Link from "next/link";
import { Typography } from "@/components/Typography";
import { navLinks, socialLinks } from "@/lib/data";

export const Footer = () => {
	return (
		<footer
			id="contact"
			className="flex md:flex-row flex-col mt-30 justify-center md:items-start items-center gap-10 md:gap-15 py-20 border-t border-accent-secondary/20 scroll-mt-24"
		>
			<div className="w-fit md:mr-10 md:text-left text-center">
				<Typography variant={"h5"} className="text-accent-secondary">
					Kevin Andreas
				</Typography>
				<Typography variant={"body"} className="text-muted text-xs">
					© 2025 Kevin Andreas. All rights reserved.
				</Typography>
			</div>

			{/* Menu and Contacts */}
			<div className="flex gap-20">
				<div className="w-fit flex flex-col gap-1">
					<Typography className="mb-2 font-semibold">This Website</Typography>
					{navLinks.map((item) => (
						<Link href={item.href} key={item.href}>
							<Typography
								variant={"body"}
								className="text-sm text-muted hover:text-accent-secondary transition-colors duration-300"
							>
								{item.name}
							</Typography>
						</Link>
					))}
				</div>
				<div className="w-fit flex flex-col gap-1">
					<Typography className="mb-2 font-semibold">Contacts</Typography>
					{socialLinks.map((item) => (
						<Link href={item.href} key={item.href} target="_blank">
							<Typography
								variant={"body"}
								className="text-sm text-muted hover:text-accent-secondary transition-colors duration-300"
							>
								{item.label}
							</Typography>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
