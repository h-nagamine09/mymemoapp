import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false, //開閉状態
    memos: []
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUSer (state) {
      stae.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addMemo (state, memo) { //エラー個所
      state.memos.push(memo)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser',user)
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    //ログアウトアクション
    logout () {
      firebase.auth().signOut()
    },
    //googleログインアクション
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu') //mutationのメソッドを呼び出す
    },
    addMemo ({ commit }, memo) {
      commit('addMemo', memo)
    }
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName: '',
    photoURL: state => state.login_user ? state.login_user.photoURL: ''
  }
})
