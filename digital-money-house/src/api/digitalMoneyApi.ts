import axios from "axios";
import useTokenStore from "@/store/token-store";

const digitalMoneyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

digitalMoneyApi.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getAccountInfo() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
      const { data } = await digitalMoneyApi.get("/account");
      return data;
    
  } catch (error) {
    console.error("Failed to fetch account information", error);
    throw error;
  }
}

export async function updateAccountAlias(userAlias, accountID) {
  try {
    const response = await digitalMoneyApi.patch(`/account/${accountID}`, { userAlias });
    return response.data;
  } catch (error) {
    console.error("Failed to update account alias", error);
    throw error;
  }
}

export default digitalMoneyApi;
