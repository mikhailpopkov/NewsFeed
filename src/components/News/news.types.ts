import { NewsById } from "@/API/types/news.types";

export interface NewsListProps {
  title: string;
}

export type SortField = "title" | "createdAt";

export interface NewsProps {
  news: NewsById;
}
