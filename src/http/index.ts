import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import AuthUsers from "../API/AuthUser.ts";

export const API_URL: string = "https://nest.tomfoolery.ru";

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string | null = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

$api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig;

    if (error.response?.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken: string | null = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        window.location.href = "/";
        return Promise.reject(error);
      }

      try {
        const res = await AuthUsers.refresh(refreshToken);

        localStorage.setItem("token", res.access_token);
        localStorage.setItem("refreshToken", res.refresh_token);

        originalRequest.headers["Authorization"] = `Bearer ${res.access_token}`;
        return $api(originalRequest);
      } catch (refreshError) {
        if (axios.isAxiosError(refreshError)) {
          if (refreshError.response?.status == 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");

            window.location.href = "/";
          }
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default $api;
