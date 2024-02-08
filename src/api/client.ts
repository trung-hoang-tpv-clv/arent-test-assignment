import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL_ENDPOINT;

export const axiosClient = axios.create({ baseURL: apiUrl });
