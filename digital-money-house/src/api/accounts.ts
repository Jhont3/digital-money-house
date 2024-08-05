import { digitalMoneyApi } from "@/api";

export async function updateAccountAlias( userAlias: string, accountID: number ) {
    try {
        const response = await digitalMoneyApi.patch("/account/" + accountID , userAlias);
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to update account alias');
    }
}

export async function getAccountInfo( ) {
    try {
        // Line to delay 3 seconds fetching information
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await digitalMoneyApi.get("/account");
        return response.data;
    } catch (error) {
        console.error("Failed to do it!", error);
        throw new Error('Failed to fetch account information');
    }
}




