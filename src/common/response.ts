import { HttpStatus } from '@nestjs/common';

export class Paging {
	private readonly page: number;
	private readonly page_size: number;
	private readonly total_page: number;
	private readonly total: number;

	constructor(page: number, page_size: number, total: number) {
		this.page = Number(page);
		this.page_size = Number(page_size);
		this.total = total ? Number(total) : 0;
		this.total_page = Math.ceil(total % page_size === 0 ? total / page_size + 1 : total / page_size);
	}
}

export class Response {
	readonly status: string | number;
	readonly message: string;
	readonly data: any;
	readonly code: any;
	readonly paging: any;

	constructor(status: string | number, data: any, paging?: any, message?: string, code?: string) {
		this.status = status;
		this.message = message || 'Successfully';
		this.data = data;
		if (code) {
			this.code = code;
		}
		if (paging) {
			this.paging = paging;
		}
	}
}

export const BaseResponse = (status: string | number, data: any, paging?: any, message?: string, code?: string,) => {
	if (status == 'success' || status == 'fail' || status == HttpStatus.BAD_REQUEST || status === HttpStatus.OK) {
		const newData = ((status == 'fail' || status == HttpStatus.BAD_REQUEST) && data?.data) || data;

		const statusRs = (status == 'fail' || status == HttpStatus.BAD_REQUEST) ? 'fail' : 'success';

		const newCode = statusRs !== 'success' && (data?.code || code) || null;
		return new Response(statusRs, newData, paging, message, newCode);
	} else {
		return new Response('error', data?.data || data, paging, message, data?.code || code);
	}
};