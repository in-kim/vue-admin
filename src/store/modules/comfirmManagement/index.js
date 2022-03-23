import Http from '@/services/http.init';
import {AuthService} from '@/services/auth.service';
import commStore from '../common';
export default{
    namespaced: true,
    state:{
        email:'',
        status:'',

        ResultData:{},
        ResultList:[],

        detailData:{},

        infoState:'',
        page:0,
    },
    actions:{
        async search (context) {
            try{
                
                const res = await Http({
                    url:'/confirm',
                    method:'get',
                    params:{
                        email:this.state.comfirmManagement.email,
                        status:this.state.comfirmManagement.status,
                        page:this.state.comfirmManagement.page,
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
                        url:`/confirm/${seq}`,
                        method:'get',
                    })

                    if(res.status === 200){
                        context.commit('DEFAULT_ASSIGN',{
                            key:'detailData',
                            value:res.data
                        })
                        context.commit('DEFAULT_ASSIGN',{
                            key:'infoState',
                            value:res.data.content[0].status
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
                console.log('??????',params);
                if(params.annual && params.status){
                    const res = await Http({
                        url:'/confirm',
                        method:'patch',
                        params:{
                            annual:params.annual,
                            deptName:params.deptName,
                            dutyCode:params.dutyCode,
                            incentiveSeq:params.incentiveSeq,
                            incentiveVal:params.incentiveVal,
                            positionCode:params.positionCode,
                            rankCode:params.rankCode,
                            reason:params.reason,
                            salarySeq:params.salarySeq,
                            salaryVal:params.salaryVal,
                            standardYear:params.standardYear,
                            status:context.state.infoState,
                        }
                    })

                    console.log('@@@@patchDetail : ',res);

                    return res;
                }
            }catch(error){
                return error.response ? error.response : error;
            }
        },
    },
    mutations:{
        ...commStore.mutations
    }
}