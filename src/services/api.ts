import axios from "axios";

const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4";

export const fetchNews = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: { q: query, token: API_KEY },
  });
  return response.data;
};
