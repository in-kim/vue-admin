import Http from '@/services/http.init';
import {AuthService} from '@/services/auth.service';
import commStore from '../common';

export default{
    namespaced:true,
    state:{
        annual:'',
        companyName:'',
        duty:'',
        year:'',
        page:0,
        ResultData:[],
        ResultList:[]
    },
    actions:{
        async search (context) {
            try{
                
                const res = await Http({
                    url:'/salary',
                    method:'get',
                    params:{
                        annual:this.state.salaryManagement.annual,
                        companyName:this.state.salaryManagement.companyName,
                        duty:this.state.salaryManagement.duty,
                        year:this.state.salaryManagement.year,
                        page:this.state.salaryManagement.page,
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
        }
    },
    mutations:{
        ...commStore.mutations
    }
}