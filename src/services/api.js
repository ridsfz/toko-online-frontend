import axios from 'axios';

const API = axios.create({ baseURL: 'https://toko-online-backend-4fd0.onrender.com/api' });

export const getProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);