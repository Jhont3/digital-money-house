// utils/fetchAccountInfo.ts
import { getAccountInfo, getAllTransactions } from "@/api";
import { useAccountStore } from "@/store";

export const fetchAccountData = async () => {
    const { accountData, setAccountInfo } = useAccountStore.getState();

    if (accountData.id === 0 || !accountData) {
        const accountInfo = await getAccountInfo();
        setAccountInfo(accountInfo);
        return accountInfo;
    }
    return accountData;
};

export const fetchUserActivities = async (accountID: number) => {
    try {
        return await getAllTransactions(accountID);
    } catch (error) {
        console.error("Error fetching user activities:", error);
        return null;
    }
};
