import useTokenStore from "@/store/token-store";
import axios from "axios";

// function getInfoID() {
//     return localStorage.getItem("uid") ? localStorage.getItem("uid") : undefined;
// }

const digitalMoneyApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

digitalMoneyApi.interceptors.request.use((config) => {
    // const token = localStorage.getItem("token");
    // console.log(token, "token middleware");

    // const token = useTokenStore.getState().token;
    // console.log(token, "token middlewareeeeeeeeee");

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjE2IiwiZW1haWwiOiJyZW4wMDE4QGhvdG1haWwuY29tIiwiZXhwIjoxNzIyOTA4NTMyfQ.kT0DdZZ0y8BeVFpj1s0WJAr0db5z8F2Ecpk6_A-GJTc"


    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }

    // const urlPatterns = [
    //     "/account",
    //     "/accounts",
    //     // `/users/${getInfoID()}`
    // ];

    // const shouldAddAuthHeader = urlPatterns.some(pattern => config.url?.startsWith(pattern));

    if (token) {
        config.headers.set('Authorization', `${token}`);
    }
    console.log(config, "Config middleware")
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default digitalMoneyApi;
