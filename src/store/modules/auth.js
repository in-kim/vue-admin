export default {
    namespaced: true,
    state: {
      accessToken: ''
    },
  
    mutations: {
      SET_TOKEN (state, payload) {
        state.accessToken = payload
      }
    }
  }