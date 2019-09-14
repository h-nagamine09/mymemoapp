<template>
  <v-container text-center>
    <v-layout row wrap>
      <v-flex>
        <h1>Welcome! MY MEMO LIB!</h1>
        <p>Please! Login with Google Account!</p>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Login with Google Account</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
