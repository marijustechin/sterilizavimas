import axios, { type InternalAxiosRequestConfig } from "axios";
// build eilute
export const BASE_URL = "/api/v1";

// dev eilute
//export const BASE_URL = 'http://localhost:3003/api/v1';

const $axios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    // Teisingas būdas nustatyti antraštę:
    // Naudojame .set() metodą, kuris yra saugiausias ir teisingiausias būdas su AxiosHeaders
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

export default $axios;
