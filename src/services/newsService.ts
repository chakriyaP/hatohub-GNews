import apiClient from "./apiClient";
import { Article, NewsApiResponse } from "../types/news";

interface FetchNewsParams {
  searchQuery?: string;
  category?: string | null;
  from?: string | null;
  to?: string | null;
  sortBy?: "asc" | "desc";
  languageKey?: string;
}

export const fetchNews = async (
  params: FetchNewsParams
): Promise<Article[]> => {
  try {
    const response = await apiClient.get<NewsApiResponse>("/top-headlines", {
      params: {
        q: params.searchQuery || "",
        category: params.category || "",
        from: params.from || undefined,
        to: params.to || undefined,
        sortBy: params.sortBy || "desc",
        max: 10,
        lang: params.languageKey || "",
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
