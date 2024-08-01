import { digitalMoneyApi } from "@/api";

export async function updateAccountAlias( userAlias: string, accountID: number ) {
    try {
        const response = await digitalMoneyApi.patch("/api/account/" + accountID , userAlias);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to fetch activities');
    }
}