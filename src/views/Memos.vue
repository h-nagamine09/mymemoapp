<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Memos</h1>
      </v-flex>
      <v-flex xs12 mt-5 text-right>
        <router-link :to="{ name: 'memo_edit' }">
        <v-btn fab dark large color="info">
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='memos'>
          <template v-slot:items="props">
            <td class="text-left">{{ props.item.title }}</td>
            <td class="text-left">{{ props.item.memo}}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    this.memos = this.$store.state.memos
  },
  data () {
    return {
      headers: [
        { text: 'Title', value:'title' },
        { text: 'Memo', value: 'memo' },
      ],
      memos: []
    }
  }
}
</script>
