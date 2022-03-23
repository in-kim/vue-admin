export default{
    namespaced: true,
    state:{
        loading:false
    },
    mutations:{
        DEFAULT_ASSIGN (state, payload) {
            state[payload.key] = payload.value;
        },
        HANDLE_LODING (state, payload){
            state.loading = payload
        }
    }
}