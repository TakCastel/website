<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>title</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          to="/">Accueil</v-btn>
        <v-btn 
          flat 
          to="/whatshot">Récents</v-btn>
        <v-btn 
          flat 
          to="/archives">Archives</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
        <vo-player/>
      </v-container>
    </v-content>
    <vo-bottom-nav/>
    <v-footer
      class="hidden-xs-and-down">
      © 2018
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
  .v-footer {
    padding: 0 16px;
  }
</style>
