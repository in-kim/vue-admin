import Http from "@/services/http.init";
import { AuthService } from "@/services/auth.service";
import commStore from "../common";

export default {
  namespaced: true,
  state: {
    companyName: "",
    userSeq: "",

    ResultData: {},
    ResultList: [],

    detailData: {},

    page: 0,
  },
  // actions:{
  //     async search (context) {
  //         try{

  //             const res = await Http({
  //                 url:'/userCompany',
  //                 method:'get',
  //                 params:{
  //                     companyName:this.state.userManagement.auth,
  //                     userSeq:this.state.userManagement.searchEmail,
  //                     page:this.state.userManagement.page,
  //                     size:10
  //                 }
  //             })

  //             if(res.status === 200){
  //                 context.commit('DEFAULT_ASSIGN',{
  //                     key:'ResultData',
  //                     value:res.data
  //                 })
  //                 context.commit('DEFAULT_ASSIGN',{
  //                     key:'ResultList',
  //                     value:res.data.content
  //                 })
  //             }else if(res.status === 401){
  //                 // logout
  //                 AuthService.makeLogout()
  //             }else{
  //                 return res
  //             }

  //             return res
  //         }catch(error){
  //             return error
  //         }
  //     },
  //     async getDetail (context, { seq }) {

  //         try{
  //             if(seq){
  //                 const res = await Http({
  //                     url:`/userCompany/${seq}`,
  //                     method:'get',
  //                 })

  //                 if(res.status === 200){
  //                     context.commit('DEFAULT_ASSIGN',{
  //                         key:'detailData',
  //                         value:res.data
  //                     })
  //                 }else if(res.status === 401){
  //                     // logout
  //                     AuthService.makeLogout()
  //                 }else{
  //                     return res
  //                 }
  //             }else{
  //                 console.log('not found base seq');
  //             }
  //         }catch(error){
  //             return error
  //         }
  //     },

  //     async patchDetail (context, { params }){
  //         try{

  //             if(params.annual){

  //                 const res = await Http({
  //                     url:'/userCompany',
  //                     method:'patch',
  //                     params:{
  //                         annual:params.annual,
  //                         deptName:params.deptName,
  //                         dutyCode:params.dutyCode,
  //                         // incentiveSeq:params.incentiveSeq,
  //                         positionCode:params.positionCode,
  //                         // rankCode:params.rankCode,
  //                         // reason:params.reason,
  //                         // salarySeq:params.salarySeq,
  //                         // salaryVal:params.salaryVal,
  //                         standardYear:params.standardYear,
  //                         // status:params.status,
  //                     }
  //                 })

  //                 console.log('@@@@patchDetail : ',res);

  //                 return res;
  //             }
  //         }catch(error){
  //             console.log('@@@@@@@',error);
  //             return error
  //         }
  //     },
  // },
  actions: {
    async search(context) {
      const res = {
        data: {
          content: [
            {
              userSeq: "51512512",
              companyName: "Samsung",
              salaryCount: "10",
              firstCertAt: "2020-02-29",
              certAt: "2020-03-02",
            },
            {
              userSeq: "152125",
              companyName: "coupang",
              salaryCount: "1",
              firstCertAt: "",
              certAt: "",
            },
            {
              userSeq: "1251259",
              companyName: "kakao",
              salaryCount: "10",
              firstCertAt: "2020-11-23",
              certAt: "2020-11-25",
            },
            {
              userSeq: "15251251",
              companyName: "toss",
              salaryCount: "10",
              firstCertAt: "2020-08-20",
              certAt: "2020-09-20",
            },
          ],
        },
        status: 200,
      };

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
    },
    async getDetail(context, { seq }) {
      if (seq) {
        const res = {
          data: {
            userSeq: "12412",
            joinAt: "2020-10-01",

            content: [
              {
                certAt: "2020-11-11",
                lastCertAt: "2020-11-11",
                standardYear: "2020",
                companyName: "kakao",
                salaryVal: "45,000,000",
                annual: "3",
                rankName: "사원",
                deptName: "개발팀",
                dutyName: "front end develope",
                positionName: "",
                annualVal: "3,500,000",
              },
              {
                certAt: "2020-11-11",
                lastCertAt: "2020-11-11",
                standardYear: "2020",
                companyName: "kakao",
                salaryVal: "65,000,000",
                annual: "6",
                rankName: "대리",
                deptName: "개발팀",
                dutyName: "front end develope",
                positionName: "파트장",
                annualVal: "6,500,000",
              },
            ],
          },
          status: 200,
        };

        if (res.status === 200) {
          context.commit("DEFAULT_ASSIGN", {
            key: "detailData",
            value: res.data,
          });
        } else if (res.status === 401) {
          // logout
          AuthService.makeLogout();
        } else {
          return res;
        }
      } else {
        console.log("not found base seq");
      }
    },

    async fetchDetail(context, { params }) {
      try {
        if (params.annual) {
          const res = await Http({
            url: "/userCompany",
            method: "patch",
            params: {
              annual: params.annual,
              deptName: params.deptName,
              dutyCode: params.dutyCode,
              // incentiveSeq:params.incentiveSeq,
              positionCode: params.positionCode,
              // rankCode:params.rankCode,
              // reason:params.reason,
              // salarySeq:params.salarySeq,
              // salaryVal:params.salaryVal,
              standardYear: params.standardYear,
              // status:params.status,
            },
          });

          console.log("@@@@fetchDetail : ", res);

          return res;
        }
      } catch (error) {
        console.log("@@@@@@@", error);
        return error;
      }
    },
  },
  mutations: {
    ...commStore.mutations,
    CLEAR_DETAIL_DATA(state) {
      state.detailData = {};
    },
  },
};
