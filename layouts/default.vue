<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>title</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app>
      © 2018
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
  .v-footer {
    padding: 0 16px;
  }
</style>
