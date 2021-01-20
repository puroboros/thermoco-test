import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    crossdomain: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.error('axios error', error);
    return Promise.reject(error);
});