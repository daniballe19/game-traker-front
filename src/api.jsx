import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'https://daniballe19.github.io/game-traker-back/';

export const api = axios.create({
  baseURL: API_BASE
});
