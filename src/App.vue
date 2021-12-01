<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-app-bar class="px-5"  fixed color="white" elevate-on-scroll>
          <v-row align="center">
            <v-col cols="3">
              <v-btn icon x-large color="error"
                     href="https://www.instagram.com/kebinou_korea/" target="_blank">
                <v-icon color="grey">mdi-instagram</v-icon>
              </v-btn>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 9" class="text-center">
              <h1 class="main-title font-weight-medium"
                  :class="!$vuetify.breakpoint.mdAndUp ? 'main-title--small' : ''">
                L'aventure Coréenne de Kebinou
              </h1>
            </v-col>
            <v-col cols="3" v-if="$vuetify.breakpoint.mdAndUp">
              <v-row justify="end">
                <v-btn text plain x-small
                       @click="$vuetify.goTo('#categories')">Categories</v-btn>
                <v-btn text plain x-small
                       @click="$vuetify.goTo('#articles')">Tous les articles</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-app-bar>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.main-title {
  font-family: 'Lobster', cursive;
  color: #1976D2;
  &--small {
    font-size: medium;
  }
}
</style>
