"use client";

import { Backdrop, Box, Slide } from "@mui/material";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import UnstyledLink from "@/components/links/UnstyledLink";
import { useTranslation } from "@/hooks/useTranslation";
import clsxm from "@/lib/clsxm";

export default function Navbar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const { t, language, toggleLanguage } = useTranslation();

	const navbarT = t("navbar");

	const navLinks = [
		{ name: navbarT.home, href: "/#hero" },
		{ name: navbarT.about, href: "/#about" },
		{ name: navbarT.experiences, href: "/#experiences" },
		{ name: navbarT.achievements, href: "/#achievements" },
		{ name: navbarT.projects, href: "/#projects" },
		{ name: navbarT.contact, href: "/#contact" },
	];

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
	};

	const toggleTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	return (
		<>
			<nav className="w-screen flex justify-center items-center py-4 px-4 fixed top-0 left-0 right-0 z-50">
				<div
					className={clsxm(
						"w-full max-w-4xl flex items-center justify-between",
						"py-3 px-5 md:px-6",
						"bg-card/80 backdrop-blur-md",
						"border border-foreground/10 rounded-2xl",
						"shadow-lg shadow-black/10",
					)}
				>
					<Box gap={1.5} flexDirection="row" display="flex" alignItems="center">
						<div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
							<Image
								src="/image.png"
								alt="Kevin Andreas"
								fill
								quality={100}
								className="object-cover"
							/>
						</div>
						<span className="font-semibold text-sm md:text-base text-foreground">
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
									"text-sm font-medium text-muted",
									"hover:text-foreground hover:bg-accent/10",
									"transition-all duration-200",
								)}
							>
								{link.name}
							</UnstyledLink>
						))}
					</Box>

					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={toggleLanguage}
							className={clsxm(
								"hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl",
								"text-sm font-medium text-muted hover:text-foreground hover:bg-accent/10",
								"transition-all duration-200",
							)}
							aria-label="Toggle language"
						>
							<Globe className="w-4 h-4" />
							<span className="uppercase">{language}</span>
						</button>

						<button
							type="button"
							onClick={toggleTheme}
							className={clsxm(
								"hidden md:flex p-2 rounded-xl",
								"text-muted hover:text-foreground hover:bg-accent/10",
								"transition-all duration-200",
							)}
							aria-label="Toggle theme"
						>
							{mounted &&
								(resolvedTheme === "dark" ? (
									<Sun className="w-5 h-5" />
								) : (
									<Moon className="w-5 h-5" />
								))}
						</button>

						<button
							type="button"
							onClick={toggleDrawer}
							className={clsxm(
								"md:hidden p-2 rounded-xl",
								"text-muted hover:text-foreground",
								"hover:bg-accent/10",
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
						"bg-card/95 backdrop-blur-lg",
						"border border-foreground/10 rounded-2xl",
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
									"text-base font-medium text-muted",
									"hover:text-foreground hover:bg-accent/10",
									"transition-all duration-200",
									"flex items-center",
								)}
							>
								{link.name}
							</UnstyledLink>
						))}
					</div>

					{/* Drawer Footer */}
					<div className="mt-4 pt-4 border-t border-foreground/10">
						<div className="flex items-center justify-between px-4 mb-2">
							<span className="text-sm text-muted">{navbarT.language}</span>
							<button
								type="button"
								onClick={toggleLanguage}
								className={clsxm(
									"flex items-center gap-1.5 px-3 py-2 rounded-xl",
									"text-sm font-medium text-muted hover:text-foreground hover:bg-accent/10",
									"transition-all duration-200",
								)}
								aria-label="Toggle language"
							>
								<Globe className="w-4 h-4" />
								<span className="uppercase">{language}</span>
							</button>
						</div>
						<div className="flex items-center justify-between px-4">
							<span className="text-sm text-muted">{navbarT.theme}</span>
							<button
								type="button"
								onClick={toggleTheme}
								className={clsxm(
									"p-2 rounded-xl",
									"text-muted hover:text-foreground hover:bg-accent/10",
									"transition-all duration-200",
								)}
								aria-label="Toggle theme"
							>
								{mounted &&
									(resolvedTheme === "dark" ? (
										<Sun className="w-5 h-5" />
									) : (
										<Moon className="w-5 h-5" />
									))}
							</button>
						</div>
					</div>
				</div>
			</Slide>
		</>
	);
}
