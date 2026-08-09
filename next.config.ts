import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// Project/experience thumbnails are served from the Go backend's
		// /uploads directory (or any external URL an admin pastes in the CMS).
		remotePatterns: [
			{ protocol: "https", hostname: "**" },
			{ protocol: "http", hostname: "**" },
		],
	},
};

export default nextConfig;
