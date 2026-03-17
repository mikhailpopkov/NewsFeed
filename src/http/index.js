import axios from "axios";

export const API_URL = "https://nest.tomfoolery.ru";

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
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

$api.interceptors.response.use((respose) => {
    return respose
}, async (error) => {
    const originalRequest = error.config;

    if (error.response?.status == 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {  
            const res = await $api.get('/auth/refresh', {withCredentials: true})
            localStorage.setItem('token', res.data.access_token);
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

            return $api(originalRequest)
        } catch (refreshError) {
            localStorage.removeItem('token');
            return Promise.reject(refreshError)
        }
    }

    return Promise.reject(error)
})

export default $api;