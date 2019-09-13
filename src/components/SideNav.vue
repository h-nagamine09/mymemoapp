<template>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
          <v-list-item avatar>
            <v-list-item-avatar>
              <img src="https://avatars2.githubusercontent.com/u/1363954?s=460&v=4">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Kazuya Kojima</v-list-item-title>
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
export default {
  data () {
    return {
      items: [
        { title: 'Home',icon: 'mdi-home' , link: {name: 'home'} },
        { title: 'Memos',icon: 'mdi-note' , link: {name: 'memos'} }
      ]
    }
  }
}
</script>
