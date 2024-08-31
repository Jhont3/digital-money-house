import { httpPost } from "./common/http";
interface Transference {
	amount: number;
	dated: string;
	destination: string;
	origin: string;
  }

export async function postDeposit(id: number, body: Transference, options = {}): Promise<any> {
	
	return httpPost(`/accounts/${id}/deposits`, body, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}

export async function postTransference(id: number, body: Transference, options = {}): Promise<any> {
	
	return httpPost(`/accounts/${id}/tra`, body, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}
