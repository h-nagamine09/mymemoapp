<template>
 <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
          <span>My Memo Lib</span>
      </v-toolbar-title>
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
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
  export default {
    name: 'App',
    components: {
      SideNav
    },
    data () {
      return {
        //
      }
    },
    methods: {
      ...mapActions(['toggleSideMenu'])
    }
  }
</script>
