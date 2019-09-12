<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Memo</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='addresses'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
            <td class="text-xs-left">{{ props.item.memo }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'メモ', value: 'memo' },
        { text: '日付', value: 'date' },
        { text: '名前', value: 'name' },
      ],
      addresses: [
        {
          name: '友人１',
          date: '1980/1/1',
          memo: '今日は勉強',
        },
        {
          name: '友人２',
          date: '1980/1/1',
          memo: '今日は寝る'
        }
      ]
    }
  }
}
</script>
