import { useState } from "react";
import { Article } from "../types/news";
import { NewsSearchParams } from "../types/news";
import dayjs from "dayjs";
import { fetchNews } from "../services/newsService";

export const useNewsFetch = (language: string) => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (values: NewsSearchParams) => {
    setLoading(true);
    const { dateRange, sortBy, searchQuery, category } = values;
    const formattedFrom = dateRange?.[0]
      ? dayjs(dateRange[0]).format("YYYY-MM-DDTHH:mm:ss[Z]")
      : undefined;
    const formattedTo = dateRange?.[1]
      ? dayjs(dateRange[1]).format("YYYY-MM-DDTHH:mm:ss[Z]")
      : undefined;

    try {
      const news = await fetchNews({
        searchQuery,
        category,
        from: formattedFrom,
        to: formattedTo,
        sortBy,
        languageKey: language,
      });

      const sortedNews = news.sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return sortBy === "asc" ? dateA - dateB : dateB - dateA;
      });

      setNewsData(sortedNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    newsData,
    loading,
    fetchArticles,
  };
};
