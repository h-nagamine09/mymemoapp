<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Memos</h1>
      </v-flex>
      <v-flex xs12 mt-5 text-right>
        <router-link :to="{ name: 'memo_edit' }">
        <v-btn fab dark large color="info">
          <v-icon dark>mdi-pencil-plus</v-icon>
        </v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers='headers' :items='memos'>
          <template v-slot:item.action="{ item }">
                <span>
                  <router-link :to="{ name: 'memo_edit', params: { memo_id: item.id }}">
                    <v-icon small class="mr-2">mdi-pencil</v-icon>
                  </router-link>
                </span>
                <span>
                   <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
                </span>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.memos = this.$store.state.memos
  },
  data () {
    return {
      headers: [
        { text: 'Title', value:'title' },
        { text: 'Memo', value: 'memo' },
        { text: 'Edit', value: 'action'}
      ],
      memos: []
    }
  },
  methods: {
    deleteConfirm (id) {
      if(confirm('Delete OK?')) {
         this.deleteMemo({ id })
      }
    },
    ...mapActions(['deleteMemo'])
  }
}
</script>

<style scoped lang ="scss">
a {
  text-decoration: none;
}

</style>
