import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false, //開閉状態
    memos: []
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addMemo (state, memo) { //エラー個所
      state.memos.push(memo)
    }
  },
  actions: {
    login () {
      const google_auth_provider = new firebase.authGoogleAuthProvider()
      firebase.auth().SignInWithRedirect(google_auth_provider)
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu') //mutationのメソッドを呼び出す
    },
    addMemo ({ commit }, memo) {
      commit('addMemo', memo)
    }
  }
})
