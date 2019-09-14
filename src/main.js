import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'



Vue.config.productionTip = false

    const firebaseConfig = {
      apiKey: "AIzaSyB4Qr32SZQKOyijW5NpDDiMf8RHZqC50TE",
      authDomain: "memoapp-709c8.firebaseapp.com",
      databaseURL: "https://memoapp-709c8.firebaseio.com",
      projectId: "memoapp-709c8",
      storageBucket: "",
      messagingSenderId: "1050533589438",
      appId: "1:1050533589438:web:ef82d23c6178f8740449ef"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
