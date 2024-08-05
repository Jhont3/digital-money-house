import { digitalMoneyApi } from "@/api";


export async function getAllCardsByAccount( accountID: number ) {
    try {
        const response = await digitalMoneyApi.get("/accounts/" + accountID + "/cards"  );
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to get all cards');
    }
}

export async function createCard( accountID: number, newCard: {}) {
    try {
        const response = await digitalMoneyApi.post("/accounts/" + accountID + "/cards", newCard );
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to create card');
    }
}

export async function getCardByID( accountID: number, cardID: number ) {
    try {
        const response = await digitalMoneyApi.get("/accounts/" + accountID + "/cards" + cardID);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to get card by card ID');
    }
}