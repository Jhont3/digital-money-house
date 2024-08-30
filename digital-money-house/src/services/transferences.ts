import { httpPost } from "./common/http";

export async function postDeposit(id: number, body: any, options = {}): Promise<any> {
	
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
