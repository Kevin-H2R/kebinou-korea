<template>
  <v-menu
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          text
          x-small
          v-on="on">
        {{ selectedLanguage }}
        <v-icon right small>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>FR</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>EN</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageMenu",
  data: function () {
    return {
      selectedLanguage : 'FR'
    }
  }
}
</script>

<style scoped>

</style>
