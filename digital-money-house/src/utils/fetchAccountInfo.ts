// utils/fetchAccountInfo.ts
import { getAccountInfo, getAllTransactions } from "@/api";
import { useAccountStore } from "@/store";

export const fetchAccountData = async () => {
    const { userData, setAccountInfo } = useAccountStore.getState();

    if (userData.id === 0 || !userData) {
        const accountInfo = await getAccountInfo();
        setAccountInfo(accountInfo);
        return accountInfo;
    }
    
    return userData;
};

export const fetchUserActivities = async (accountID: number) => {
    try {
        return await getAllTransactions(accountID);
    } catch (error) {
        console.error("Error fetching user activities:", error);
        return null;
    }
};
