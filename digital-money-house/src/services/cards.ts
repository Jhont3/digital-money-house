
import { CardData } from "@/interfaces/cards_";
import { httpDelete, httpGetRevalidateCards, httpPost } from "./common/http";

export async function getCards(id: number, token: string, revalidateTag = "", options = {}): Promise<CardData[]> {
	return httpGetRevalidateCards(`/accounts/${id}/cards`, token, revalidateTag, {
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

export async function postCards(id: number, body: any, options = {}): Promise<any> {

	
	return httpPost(`/accounts/${id}/cards`, body, {
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


export async function deleteCard(id: number, cardId: number, options = {}): Promise<any> {
	return httpDelete(`/accounts/${id}/cards/${cardId}`, {
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