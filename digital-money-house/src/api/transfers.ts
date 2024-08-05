import digitalMoneyApi from "./digitalMoneyApi";

// TODO: test this
// const newDeposit = {
//     amount: 0,
//     dated: "string",
//     destination: "string",
//     origin: "string"
// }

// const newTransfer = {
//     amount: 0,
//     dated: "string",
//     destination: "string",
//     origin: "string"
// }

export async function createDeposit( accountID: number, newDeposit: {} ) {
    try {
        const response = await digitalMoneyApi.post("/accounts/" + accountID + "/deposits"  , newDeposit);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to make a deposit');
    }
}

export async function getAllTransfers(accountID: number) {
    try {
        const response = await digitalMoneyApi.get("/accounts/" + accountID + "transferences");
        return response.data;
    } catch (error) {
        console.error("Failed to get all Transactions", error);
        throw new Error('Failed to get all Transactions');
    }
}

export async function createTransfer(accountID: number, newTransfer: {}){
    try {
        const response = await digitalMoneyApi.post("/accounts/" + accountID + "/transferences", newTransfer );
        return response.data;
    } catch (error) {
        console.error("Failed to get Transaction by ID", error);
        throw new Error('Failed to create transfer');
    }
}
