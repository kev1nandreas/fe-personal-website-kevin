import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Providers from "@/app/providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700", "800", "900"],
});

const siteConfig = {
	title: "Kevin Andreas",
	description:
		"Personal website of Kevin Andreas, a web developer and data scientist passionate about building modern web applications and extracting meaningful insights from data.",
	url: process.env.SITE_URL || "https://example.com",
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s - ${siteConfig.title}`,
	},
	icons: {
		icon: "/image.png",
	},
	description: siteConfig.description,
	twitter: {
		card: "summary_large_image",
	},
	robots: { index: true, follow: true },
	authors: [
		{
			name: siteConfig.title,
			url: siteConfig.url,
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<Head>
				<meta name="apple-mobile-web-app-title" content={siteConfig.title} />
			</Head>
			{process.env.NEXT_PUBLIC_RUN_MODE === "production" && <GoogleAnalytics />}
			<body className={`${poppins.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
