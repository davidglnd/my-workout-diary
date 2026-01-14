import axios from 'https://cdn.skypack.dev/axios?min';

export const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 5000,
});