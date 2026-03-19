import $api from "../http";

export default class Comments {
  static async getNewsComments(id) {
    const res = await $api.get(`/news/${id}/comments`);
    return res.data;
  }
}
