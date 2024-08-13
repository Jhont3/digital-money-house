"use client"
import axios from "axios";


const digitalMoneyApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

digitalMoneyApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    
    const urlPatterns = [
        "/account",
        "/accounts",
        `/users`,
        "logout",
    ];

    const shouldAddAuthHeader = urlPatterns.some(pattern => config.url?.startsWith(pattern));

    if (shouldAddAuthHeader && token) {
        config.headers.set('Authorization', `${token}`);
    }
    console.log(config, "Config middleware")
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default digitalMoneyApi;
