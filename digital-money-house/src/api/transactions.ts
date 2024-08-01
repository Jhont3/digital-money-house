import { digitalMoneyApi } from "@/api";

export async function createTransaction( accountID: number, newTransaction: string ) {
    try {
        const response = await digitalMoneyApi.post("/api/accounts/" + accountID + "/transactions"  , newTransaction);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to fetch activities');
    }
}

export async function getAllTransactions(accountID: number) {
    try {
        const response = await digitalMoneyApi.get("/api/accounts/" + accountID);
        return response.data;
    } catch (error) {
        console.error("Failed to get all Transactions", error);
        throw new Error('Failed to get all Transactions');
    }
}

export async function getTransactionByID(accountID: number, transactionID: number){
    try {
        const response = await digitalMoneyApi.get("/api/accounts/" + accountID + "/transactions/" + transactionID);
        return response.data;
    } catch (error) {
        console.error("Failed to get Transaction by ID", error);
        throw new Error('Failed to get Transaction by ID');
    }
}

export async function deleteTransactionByID(accountID: number, transactionID: number){
    try {
        const response = await digitalMoneyApi.delete("/api/accounts/" + accountID + "/transactions/" + transactionID);
        return response.data;
    } catch (error) {
        console.error("Failed to get Transaction by ID", error);
        throw new Error('Failed to get Transaction by ID');
    }
}
