import axios from "axios";

function getInfoID() {
    return localStorage.getItem("uid") ? localStorage.getItem("uid") : undefined;
}

const digitalMoneyApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

digitalMoneyApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    const urlPatterns = [
        "/api/account",
        "/api/accounts",
        `/api/users/${getInfoID()}`
    ];

    const shouldAddAuthHeader = urlPatterns.some(pattern => config.url?.startsWith(pattern));

    if (shouldAddAuthHeader && token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default digitalMoneyApi;
