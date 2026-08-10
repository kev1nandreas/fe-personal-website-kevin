import { notFound, redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { get } from "@/services/api/main/call";
import { MAIN_ENDPOINT } from "@/services/api/main/endpoint";
import type { LinkDetailResponse } from "@/types/link";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

	const { OK, Kind } = await get<LinkDetailResponse>(
		MAIN_ENDPOINT.Links.FetchLinkBySlug(slug),
	);

	if (!OK) {
		notFound();
	}

	const link = (Kind as LinkDetailResponse).data;

	if (!link?.destination || !link.active) {
		notFound();
	}

	redirect(link.destination);
}
