import Http from '@/services/http.init';
import {AuthService} from '@/services/auth.service';
import commStore from '../common';

export default{
    namespaced: true,
    state:{
        companyName:'',
        userSeq:'',

        ResultData:{},
        ResultList:[],

        detailData:{},

        page:0,
    },
    actions:{
        async search (context) {
            try{
                
                const res = await Http({
                    url:'/userCompany',
                    method:'get',
                    params:{
                        companyName:this.state.userManagement.auth,
                        userSeq:this.state.userManagement.searchEmail,
                        page:this.state.userManagement.page,
                        size:10
                    }
                })

                if(res.status === 200){
                    context.commit('DEFAULT_ASSIGN',{
                        key:'ResultData',
                        value:res.data
                    })
                    context.commit('DEFAULT_ASSIGN',{
                        key:'ResultList',
                        value:res.data.content
                    })
                }else if(res.status === 401){
                    // logout
                    AuthService.makeLogout()
                }else{
                    return res
                }

                return res
            }catch(error){
                return error
            }
        },
        async getDetail (context, { seq }) {
            
            try{
                if(seq){
                    const res = await Http({
                        url:`/userCompany/${seq}`,
                        method:'get',
                    })
    
                    if(res.status === 200){
                        context.commit('DEFAULT_ASSIGN',{
                            key:'detailData',
                            value:res.data
                        })
                    }else if(res.status === 401){
                        // logout
                        AuthService.makeLogout()
                    }else{
                        return res
                    }
                }else{
                    console.log('not found base seq');
                }
            }catch(error){
                return error
            }
        },

        async patchDetail (context, { params }){
            try{

                if(params.annual){
                    
                    const res = await Http({
                        url:'/userCompany',
                        method:'patch',
                        params:{
                            annual:params.annual,
                            deptName:params.deptName,
                            dutyCode:params.dutyCode,
                            // incentiveSeq:params.incentiveSeq,
                            positionCode:params.positionCode,
                            // rankCode:params.rankCode,
                            // reason:params.reason,
                            // salarySeq:params.salarySeq,
                            // salaryVal:params.salaryVal,
                            standardYear:params.standardYear,
                            // status:params.status,
                        }
                    })

                    console.log('@@@@patchDetail : ',res);

                    return res;
                }
            }catch(error){
                console.log('@@@@@@@',error);
                return error
            }
        },
    },
    mutations:{
        ...commStore.mutations,
        CLEAR_DETAIL_DATA(state){
            state.detailData = {}
        }
    }
}