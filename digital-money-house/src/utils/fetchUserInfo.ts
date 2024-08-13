import { getUser } from "@/api";
import { useAccountStore } from "@/store";
import { useUserStore } from "@/store/user-data";
import { fetchAccountData } from "./fetchAccountInfo";

export const fetchUserData = async () => {
    const { userData, setUserInfo } = useUserStore.getState();
    const { accountData } = useAccountStore.getState();
    
    if (accountData.user_id === 0) {
        await fetchAccountData()
    }

    if (userData.email === '') {
        const accountInfo = await getUser(accountData.user_id);
        setUserInfo(accountInfo);
        console.log('si entro en el segundo fetch')
        console.log(accountInfo, "accountinfo")
        return accountInfo;
    }    
    return userData;  
};
