import { Article } from "../../services/api";

export interface NewsListProps {
  articles: Article[];
  loading: boolean;
}
