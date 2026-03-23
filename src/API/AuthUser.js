import $api from "../http";
import axios from "axios";

export default class AuthUsers {
  static async registration(email, password, name) {
    const res = await $api.post("/auth/register", {
      email,
      password,
      name,
    });

    return res;
  }

  static async login(email, password) {
    const res = await $api.post("/auth/login", {
      email,
      password,
    });

    return res;
  }

  static async logout() {
    const res = await $api.post("/auth/logout");
    return res;
  }

  static async refresh(refreshToken) {
    const res = await axios.post(
      "https://nest.tomfoolery.ru/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    return res;
  }

  static async checkAuth() {
    const res = await $api.get("/users/me");
    return res;
  }
}
