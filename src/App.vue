<template>
  <div id="app">
    <v-app>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
</style>
