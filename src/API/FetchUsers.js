import $api from "../http";

export default class FetchUsers {
  static async getUsers() {
    const res = await $api.get("/users");
    return res.data;
  }

  static async getUserById(id) {
    const res = await $api.get("/users/" + id);
    return res.data;
  }
}
