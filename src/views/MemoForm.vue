<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>Add Memo</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
            <v-text-field v-model="memo.title" label="Title"></v-text-field>
            <v-text-field v-model="memo.memo" label="Memo"></v-text-field>
               <v-btn color="info" @click="submit">Submit</v-btn>
               <v-btn color="red" @click="$router.push({ name: 'memos'})">Cancel</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      memo: {}
    }
  },
  methods: {
    submit () {
      this.addMemo(this.memo)
      this.$router.push({ name: 'memos'})
      this.memo = {}
    },
    ...mapActions(['addMemo'])
  }
}
</script>
