import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    token: API_KEY,
  },
});

export default apiClient;
