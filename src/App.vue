<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-toolbar class="px-5">
          <v-row align="center">
            <v-col cols="3">
              <v-btn icon x-large><v-icon>mdi-instagram</v-icon></v-btn>
            </v-col>
            <v-col cols="6" class="text-center">
              <v-toolbar-title>L'aventure Coréene par Kebinou</v-toolbar-title>
            </v-col>
            <v-col cols="3">
              <v-row justify="end">
                <v-btn text plain x-small>Categories</v-btn>
                <v-btn text plain x-small>Tous les articles</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-toolbar>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
</style>
