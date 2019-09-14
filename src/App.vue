<template>
 <v-app id="inspire">
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon v-show= "$store.state.login_user" @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-app-bar-title class="headline text-uppercase">
          <span>My Memo Lib</span>
      </v-app-bar-title>
      <v-app-bar-items v-if="$store.state.login_user" text-right>
        <v-btn @click="logout">Logout</v-btn>
      </v-app-bar-items>
    </v-app-bar>
    <SideNav/>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; hiroki nagamine 2019.</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
  export default {
    name: 'App',
    components: {
      SideNav
    },
    created () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setLoginUser(user)
          if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'memos'})
        } else {
          this.deleteLoginUser()
          this.$router.push({ name: 'home'})
        }
      })
    },
    data () {
      return {
        //
      }
    },
    methods: {
      ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser'])
    }
  }
</script>
