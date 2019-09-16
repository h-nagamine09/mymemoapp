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
    deleteLoginUser (state) {
      state.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addMemo (state, {id , memo}) {
      memo.id = id
      state.memos.push(memo)
    },
    updateMemo (state, {id, memo}) {
      const index = state.memos.findIndex(memo => memo.id === id)

      state.memos[index] = memo
    },
    deleteMemo (state, { id }) {
      const index = state.memos.findIndex(memo => memo.id === id)

      state.memos.splice(index, 1)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser',user)
    },
    fetchMemos ({ getters , commit }) {
      firebase.firestore().collection(`users/${getters.uid}/memos`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addMemo' , { id: doc.id, memo: doc.data() }))
      })
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
    addMemo ({ getters , commit }, memo) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/memos`).add(memo).then(doc => {
          commit('addMemo', { id: doc.id, memo })
        })
      }
    },
    updateMemo ({ getters, commit }, {id , memo}) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/memos`).doc(id).update(memo).then(doc => {
          commit('addMemo', { id: doc.id, memo })
        })
      }
    },
    deleteMemo ({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/memos`).doc(id).delete().then(() => {
          commit('deleteMemo', { id })
        })
      }
    }
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName: '',
    photoURL: state => state.login_user ? state.login_user.photoURL: '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getMemoById: state => id => state.memos.find(memo => memo.id === id) //関数を返す関数
  }
})
