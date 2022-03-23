import Http from "@/services/http.init";
import { AuthService } from "@/services/auth.service";
import commStore from "../common";
export default {
  namespaced: true,
  state: {
    type: "",

    ResultData: {},
    ResultList: [],

    page: 0,
  },
  actions: {
    async search(context) {
      try {
        const res = await Http({
          url: "/code",
          method: "get",
          params: {
            type: this.state.codeManagement.type,
            page: this.state.codeManagement.page,
            size: 10,
          },
        });

        if (res.status === 200) {
          context.commit("DEFAULT_ASSIGN", {
            key: "ResultData",
            value: res.data,
          });
          context.commit("DEFAULT_ASSIGN", {
            key: "ResultList",
            value: res.data.content,
          });
        } else if (res.status === 401) {
          // logout
          AuthService.makeLogout();
        } else {
          return res;
        }

        return res;
      } catch (error) {
        return error;
      }
    },
  },
  mutations: {
    ...commStore.mutations,
  },
};
