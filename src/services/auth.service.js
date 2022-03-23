import axios from "axios";

import $router from "../router";
import qs from "qs";
import { API_URL } from "../.env";
import $store from "@/store/";

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin(email, password) {
    try {
      // const response = await axios.post(
      //   `${API_URL}/token/create`,
      //   qs.stringify({ email, password })
      // );
      const response = {
        data: "accessToken12341241" + email + password,
        status: 200,
      };
      let accessToken = response.data;

      this.setToken({
        accessToken: accessToken,
      });

      $store.commit("auth/SET_TOKEN", accessToken);

      return response;
    } catch (error) {
      throw new error();
    }
  }

  static async makeLogout() {
    localStorage.removeItem("accessToken");

    $store.commit("auth/SET_TOKEN", "");

    $router.push({ name: "login" });
  }

  static getToken() {
    let accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      return accessToken;
    } else {
      return false;
    }
  }

  static setToken(token) {
    localStorage.setItem("accessToken", token.accessToken);
  }

  static async hasToken(token) {
    try {
      // const response = await axios.get(
      //   `${API_URL}/token/valid?authKey=${token}`
      // );

      const response = "success";

      return new Promise(function (resolve, reject) {
        resolve(response);
        reject(new Error("hasToken Failed"));
      });
    } catch (error) {
      return error;
    }
  }
}
