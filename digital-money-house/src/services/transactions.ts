import { Transaction } from "@/interfaces";
import { httpPost } from "./common/http";

export async function postTransaction(id: number, body: Transaction, options = {}): Promise<any> {
	
	return httpPost(`/accounts/${id}/transactions`, body, {
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
