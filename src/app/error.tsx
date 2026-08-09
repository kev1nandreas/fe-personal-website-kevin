"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-6 text-center">
			<h1 className="text-2xl font-semibold">Something went wrong</h1>
			<p className="text-muted max-w-md">
				{error.message || "An unexpected error occurred."}
			</p>
			<button
				type="button"
				onClick={reset}
				className="px-4 py-2 rounded-xl border border-foreground/20 hover:bg-accent/10 transition-colors"
			>
				Try again
			</button>
		</div>
	);
}
