import { Article } from "../../types/news";

export interface NewsListProps {
  articles: Article[];
  loading: boolean;
}
