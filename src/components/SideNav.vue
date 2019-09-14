<template>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
          <v-list-item avatar>
            <v-list-item-avatar>
              <img v-if ="photoURL" :src="photoURL">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ userName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

    <v-list class="pt-0" dense>
    <v-divider></v-divider>
       <v-list-item v-for="item in items" :key="item.title" :to='item.link'>
         <v-list-item-action>
           <v-icon>{{item.icon}}</v-icon>
         </v-list-item-action>
         <v-list-item-content>
           <v-list-item-title>{{item.title}}</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
     </v-list>
   </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      items: [
        { title: 'Memos',icon: 'mdi-note' , link: {name: 'memos'} }
      ]
    }
  },
  computed: {
    ...mapGetters(['userName','photoURL'])
  }
}
</script>
