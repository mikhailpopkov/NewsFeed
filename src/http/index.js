import axios from "axios";
import AuthUsers from "../API/AuthUser";

export const API_URL = "https://nest.tomfoolery.ru";

const $api = axios.create({
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

$api.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config;
    
    if(error.response?.status == 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            window.location.href = '/'
            return Promise.reject(error)
        }

        try {
            const res =  await AuthUsers.refresh(refreshToken);

            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('refreshToken', res.data.refresh_token);

            originalRequest.headers['Authorization'] = `Bearer ${res.data.access_token}`
            return $api(originalRequest);
        } catch (refreshError) {
            if (refreshError.response?.status == 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');

                window.location.href = "/";
            }
            
            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error)
})

export default $api;