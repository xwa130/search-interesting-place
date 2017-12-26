<template>
  <v-app toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      absolute>
      <v-list dense>
        <v-list-tile
          target='_blank'
          href='https://www.github.com/xwa130/search-interesting-place'
          @click.stop='drawer = !drawer'>
          <v-list-tile-action>
            <v-icon>home</v-icon> {{ process.env.API_KEY }}
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Source Code</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class='indigo' dark fixed>
      <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down'>
        <v-btn flat to='pinefites'>
            Pinefites
        </v-btn>
        <v-btn flat to='favorites'>
            Favorites
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer class="indigo" fixed>
      <span class="white--text">2017 Zenefits</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true
      }
    }
  }
</script>