import $api from "../http";
import { User } from "./types/auth.types";
import { Users } from "./types/users.types";

export default class FetchUsers {
  static async getUsers(): Promise<Users> {
    const res = await $api.get<Users>("/users");
    return res.data;
  }

  static async getUserById(id: number): Promise<User> {
    const res = await $api.get<User>("/users/" + id);
    return res.data;
  }
}
