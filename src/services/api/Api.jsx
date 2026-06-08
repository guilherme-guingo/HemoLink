import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6a271c9ba84f9d39e90846df.mockapi.io/pedidos',
});
