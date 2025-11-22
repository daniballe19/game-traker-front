import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'https://github.com/daniballe19/game-traker-front.git';

export const api = axios.create({
  baseURL: API_BASE
});
