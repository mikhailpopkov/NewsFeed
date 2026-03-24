import $api from "../http";
import axios from "axios";
import { ResponseUser, User } from "./types/auth.types";

export default class AuthUsers {
  static async registration(
    email: string,
    password: string,
    name: string,
  ): Promise<ResponseUser> {
    const res = await $api.post<ResponseUser>("/auth/register", {
      email,
      password,
      name,
    });

    return res.data;
  }

  static async login(email: string, password: string): Promise<ResponseUser> {
    const res = await $api.post<ResponseUser>("/auth/login", {
      email,
      password,
    });

    return res.data;
  }

  static async logout(): Promise<void> {
    const res = await $api.post("/auth/logout");
    return res.data;
  }

  static async refresh(refreshToken: string): Promise<ResponseUser> {
    const res = await axios.post<ResponseUser>(
      "https://nest.tomfoolery.ru/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    return res.data;
  }

  static async checkAuth(): Promise<User> {
    const res = await $api.get<User>("/users/me");
    return res.data;
  }
}
