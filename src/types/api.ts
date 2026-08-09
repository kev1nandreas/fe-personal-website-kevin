// Matches be-personal-website-kevin/pkg/pagination.Meta — used by the
// Projects/Experiences list endpoints (pkg/response.Response{success,message,data,meta}).
export interface Metadata {
	page: number;
	page_size: number;
	total_items: number;
	total_pages: number;
	has_next: boolean;
	has_prev: boolean;
}

export type PaginateData<Data> = {
	data_per_page: Data;
	meta: {
		page: number;
		max_page: number;
	};
};

export interface PaginatedApiResponse<DataType> {
	code: number;
	status: boolean;
	message: string;
	data: PaginateData<DataType>;
}

export type ApiResponse<T> = {
	message: string;
	status: boolean;
	code: number;
	data: T;
};

export type ApiError = {
	code: number;
	status: boolean | number;
	message: string;
};

export type UninterceptedApiError = {
	code: number;
	status: boolean;
	message: string | Record<string, string[]>;
};
