<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-app-bar :class="$vuetify.breakpoint.mdAndUp ? 'px-5' : 'pa-0'"  fixed color="white" elevate-on-scroll>
          <v-row align="center">
            <v-col cols="3" v-if="$vuetify.breakpoint.mdAndUp && $route.name === 'Home'">
              <v-row justify="start">
                <v-btn text plain x-small
                       @click="$vuetify.goTo('#categories')">{{ $t('categories') }}</v-btn>
                <v-btn text plain x-small
                       @click="$vuetify.goTo('#articles')">{{ $t('allArticles') }}</v-btn>
                <v-btn text plain x-small
                       @click="$vuetify.goTo('#addresses')">{{ $t('addresses') }}</v-btn>
              </v-row>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mdAndUp ? 3 : 1" v-else-if="$route.name !== 'Home'">
                <v-btn text plain :x-large="$vuetify.breakpoint.mdAndUp"
                       :x-small="!$vuetify.breakpoint.mdAndUp"
                       @click="goToHome()" icon><v-icon>mdi-home</v-icon></v-btn>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mdAndUp ? 6 : 7" class="text-center">
              <h1 class="main-title font-weight-medium"
                  :class="$vuetify.breakpoint.mdAndUp ? '' : 'main-title--small'">
                {{ $t('kebinouAdventure') }}
              </h1>
            </v-col>
            <v-col :cols="$vuetify.breakpoint.mdAndUp ? 3 : 4">
              <v-row justify="end" align="center">
                <language-menu />
                <v-btn icon :x-large="$vuetify.breakpoint.mdAndUp" color="error"
                       href="https://www.instagram.com/kebinou_korea/" target="_blank">
                  <v-icon color="grey" :x-small="!$vuetify.breakpoint.mdAndUp">
                    mdi-instagram
                  </v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-app-bar>
        <router-view :key="$route.fullPath"/>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import LanguageMenu from "./components/LanguageMenu";
export default {
  name: 'App',
  components: {LanguageMenu},
  methods: {
    goToHome() {
      this.$router.push("/").then(() => {
        this.$vuetify.goTo('#articles', {duration: 0})
      })
    }
  },
  data: function () {
    return {
      toggle: 0
    }
  }
}
</script>
<style lang="scss">
.main-title {
  font-family: 'Lobster', cursive;
  color: #1976D2;
  &--small {
    font-size: 1em;
  }
}
</style>
