import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { GetCookie, removeAllCookies, SetCookie } from '../libs/cookies';

const localBackendUrl = 'http://localhost:50000/api/';

export const Instance = axios.create({
    baseURL: localBackendUrl,
    headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
    },
});

const logoutUser = () => {
    removeAllCookies();
    window.location.reload();
};

const onRequestFulfilled = (config: InternalAxiosRequestConfig) => {
    const accessToken = GetCookie('access_token');

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
};

const onRequestRejected = (error: any) => {
    return Promise.reject(error);
};

const INVALID_REFRESH_TOKEN_STATUSES = [
    'Token is invalid or expired',
    'Token is blacklisted',
    "Token 'exp' claim has expired",
];

const onResponseFulfilled = (response: AxiosResponse) => response;
const onResponseRejected = async (error: any) => {
    const originalRequest = error.config;

    if (originalRequest?.url !== '/auth/login/' && error.response) {
    }

    return Promise.reject(error);
};

Instance.interceptors.request.use(onRequestFulfilled, onRequestRejected);
Instance.interceptors.response.use(onResponseFulfilled, onResponseRejected);

