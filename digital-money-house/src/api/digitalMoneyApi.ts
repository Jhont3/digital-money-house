import axios from "axios";

function getInfoID() {
    return localStorage.getItem("uid") ? localStorage.getItem("uid") : undefined;
}

const digitalMoneyApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

digitalMoneyApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    console.log(token, "token middleware");
    const urlPatterns = [
        "/account",
        "/accounts",
        `/users/${getInfoID()}`
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
