"use client";

import { Backdrop, Box, Slide } from "@mui/material";
import { Menu, Sun, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import IconButton from "@/components/button/IconButton";
import UnstyledLink from "@/components/links/UnstyledLink";
import clsxm from "@/lib/clsxm";
import { navLinks } from "@/lib/data";

export default function Navbar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
	};

	return (
		<>
			<nav className="w-full flex justify-center items-center py-4 px-4 fixed top-0 left-0 right-0 z-50">
				<div
					className={clsxm(
						"w-full max-w-4xl flex items-center justify-between",
						"py-3 px-5 md:px-6",
						"bg-neutral-900/80 backdrop-blur-md",
						"border border-neutral-700/50 rounded-2xl",
						"shadow-lg shadow-black/10",
					)}
				>
					<Box gap={1.5} flexDirection="row" display="flex" alignItems="center">
						<div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
							<Image
								src="/image.png"
								alt="Kevin Andreas"
								fill
								className="object-cover"
							/>
						</div>
						<span className="font-semibold text-sm md:text-base bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
							Kevin Andreas
						</span>
					</Box>

					<Box gap={1} display={{ xs: "none", md: "flex" }} alignItems="center">
						{navLinks.map((link) => (
							<UnstyledLink
								key={link.href}
								href={link.href}
								className={clsxm(
									"px-4 py-2 rounded-xl",
									"text-sm font-medium text-neutral-400",
									"hover:text-neutral-100 hover:bg-neutral-800/60",
									"transition-all duration-200",
								)}
							>
								{link.name}
							</UnstyledLink>
						))}
					</Box>

					<div className="flex items-center gap-2">
						<IconButton
							icon={Sun}
							variant="ghost"
							size="base"
							className="text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 hidden md:flex"
						/>

						<button
							type="button"
							onClick={toggleDrawer}
							className={clsxm(
								"md:hidden p-2 rounded-xl",
								"text-neutral-400 hover:text-neutral-100",
								"hover:bg-neutral-800/60",
								"transition-all duration-200",
							)}
							aria-label="Toggle menu"
						>
							{isDrawerOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Drawer Backdrop */}
			<Backdrop
				open={isDrawerOpen}
				onClick={closeDrawer}
				sx={{
					zIndex: 40,
					backgroundColor: "rgba(0, 0, 0, 0.6)",
					backdropFilter: "blur(4px)",
				}}
			/>

			{/* Mobile Drawer from Top */}
			<Slide direction="down" in={isDrawerOpen} mountOnEnter unmountOnExit>
				<div
					className={clsxm(
						"fixed top-22 left-4 right-4 z-45",
						"bg-neutral-900/95 backdrop-blur-lg",
						"border border-neutral-700/50 rounded-2xl",
						"shadow-2xl shadow-black/30",
						"p-4",
					)}
				>
					<div className="flex flex-col gap-1">
						{navLinks.map((link) => (
							<UnstyledLink
								key={link.href}
								href={link.href}
								onClick={closeDrawer}
								className={clsxm(
									"px-4 py-3 rounded-xl",
									"text-base font-medium text-neutral-300",
									"hover:text-neutral-100 hover:bg-neutral-800/60",
									"transition-all duration-200",
									"flex items-center",
								)}
							>
								{link.name}
							</UnstyledLink>
						))}
					</div>

					{/* Drawer Footer */}
					<div className="mt-4 pt-4 border-t border-neutral-700/50">
						<div className="flex items-center justify-between px-4">
							<span className="text-sm text-neutral-500">Theme</span>
							<IconButton
								icon={Sun}
								variant="ghost"
								size="base"
								className="text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60"
							/>
						</div>
					</div>
				</div>
			</Slide>
		</>
	);
}
