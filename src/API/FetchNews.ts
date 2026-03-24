import $api from "../http";
import { News, NewsById, Tags } from "./types/news.types";

export default class FetchData {
  static async getNews(limit: number = 6, page: number = 1): Promise<News> {
    const res = await $api.get<News>("/news", {
      params: {
        limit,
        page,
      },
    });
    return res.data;
  }

  static async getNewsDetail(id: number): Promise<NewsById> {
    const res = await $api.get<NewsById>("/news/" + id);
    return res.data;
  }

  static async getNewsTags(): Promise<Tags[]> {
    const res = await $api.get<Tags[]>("/tags");
    return res.data;
  }
}
