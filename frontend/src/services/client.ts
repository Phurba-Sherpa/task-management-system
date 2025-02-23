import axios from "axios";
//////////////////////////
/* PUBLIC API */
//////////////////////////

const baseURL = import.meta.env.VITE_BASE_URL;
export const publicApi = axios.create({
  baseURL,
});
