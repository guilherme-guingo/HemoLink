import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a271c9ba84f9d39e90846df.mockapi.io',
});

export default api;