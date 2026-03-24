import $api from "../http";
import { CreatedComments, ResponseComments } from "./types/comments.types";

export default class Comments {
  static async getNewsComments(id: number): Promise<ResponseComments> {
    const res = await $api.get<ResponseComments>(`/news/${id}/comments`);
    return res.data;
  }

  static async postNewsComments(
    id: number,
    content: string,
  ): Promise<CreatedComments> {
    const res = await $api.post<CreatedComments>(`/news/${id}/comments`, {
      content,
    });
    return res.data;
  }
}
