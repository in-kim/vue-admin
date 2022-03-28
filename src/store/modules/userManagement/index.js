import Http from "@/services/http.init";
import { AuthService } from "@/services/auth.service";
import commStore from "../common";
export default {
  namespaced: true,
  state: {
    authOption: [
      {
        label: "안증",
        value: true,
      },
      {
        label: "비인증",
        value: false,
      },
    ],
    auth: "",
    isAuth: "",
    searchEmail: "",
    certMailAt: "",
    createAt: "",

    ResultData: {},
    ResultList: [],

    page: 0,
  },
  // actions: {
  //   async search(context, { searchParams }) {
  //     try {
  //       const res = await Http({
  //         url: "/user",
  //         method: "get",
  //         params: {
  //           certYn: this.state.userManagement.auth,
  //           searchEmail: this.state.userManagement.searchEmail,
  //           certStartDate: searchParams.certStartDate,
  //           certEndDate: searchParams.certEndDate,
  //           joinStartDate: searchParams.joinStartDate,
  //           joinEndDate: searchParams.joinEndDate,
  //           page: this.state.userManagement.page,
  //           size: 10,
  //         },
  //       });

  //       if (res.status === 200) {
  //         res.data.content.map((el) => {
  //           if (el.certYn) {
  //             return (el.certYn = "Y");
  //           } else if (el.certYn === null) {
  //             return (el.certYn = "없음");
  //           } else {
  //             return (el.certYn = "N");
  //           }
  //         });

  //         context.commit("DEFAULT_ASSIGN", {
  //           key: "ResultData",
  //           value: res.data,
  //         });
  //         context.commit("DEFAULT_ASSIGN", {
  //           key: "ResultList",
  //           value: res.data.content,
  //         });
  //       } else if (res.status === 401) {
  //         // logout
  //         AuthService.makeLogout();
  //       } else {
  //         return res;
  //       }

  //       return res;
  //     } catch (error) {
  //       return error;
  //     }
  //   },
  // },
  actions: {
    search(context, { searchParams }) {
      const res = {
        data: {
          content: [
            {
              title: "abc@naver.com",
              certMailAt: "2020-10-31",
              certYn: null,
              createdAt: "2020-10-29",
            },
            {
              title: "def@naver.com",
              certMailAt: "2020-09-31",
              certYn: '',
              createdAt: "2020-09-20",
            },
            {
              title: "ghi@naver.com",
              certMailAt: "2020-09-31",
              certYn: '2020-09-29',
              createdAt: "2020-09-20",
            },
            {
              title: "jkl@naver.com",
              certMailAt: "2020-09-31",
              certYn: '2020-09-29',
              createdAt: "2020-09-20",
            },
          ],
        },
        status: 200,
      };

      if (res.status === 200) {
        res.data.content.map((el) => {
          if (el.certYn) {
            return (el.certYn = "Y");
          } else if (el.certYn === null) {
            return (el.certYn = "없음");
          } else {
            return (el.certYn = "N");
          }
        });

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
    },
  },

  mutations: {
    ...commStore.mutations,
  },
};
