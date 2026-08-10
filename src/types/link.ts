export interface Link {
	id: string;
	slug: string;
	destination: string;
	active: boolean;
	visits: number;
	qr_code: string;
	expires_at: string | null;
	created_at: string;
	updated_at: string;
}

export interface LinkDetailResponse {
	success: boolean;
	message: string;
	data: Link;
}
