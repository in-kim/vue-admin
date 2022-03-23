import Http from '@/services/http.init';
import {AuthService} from '@/services/auth.service';
import commStore from '../common';

export default{
    namespaced:true,
    state:{
        type:'',
        userSeq:'',
        startDate:'',
        endDate:'',
        page:0,
        ResultData:[],
        ResultList:[]
    },
    actions:{
        async search (context, {searchParams}) {
            try{
                const res = await Http({
                    url:'/point',
                    method:'get',
                    params:{
                        type:this.state.pointManagement.type,
                        userSeq:this.state.pointManagement.userSeq,
                        startDate:searchParams.startDate,
                        endDate:searchParams.endDate,
                        page:this.state.pointManagement.page,
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