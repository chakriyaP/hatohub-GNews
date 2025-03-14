export type NewsSearchParams = {
  searchQuery: string;
  category: string | null;
  dateRange: [string, string] | null;
  sortBy: "asc" | "desc";
};

export interface Source {
  name: string;
  url: string;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: Source;
}

export interface NewsApiResponse {
  totalArticles: number;
  articles: Article[];
}
