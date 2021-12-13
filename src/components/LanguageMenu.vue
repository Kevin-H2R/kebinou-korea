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
    <v-list dense class="pa-0">
      <v-list-item-group v-model="selectedLanguage" color="primary">
        <v-list-item dense value="FR">
          <v-list-item-title>FR</v-list-item-title>
        </v-list-item>
        <v-list-item dense value="EN">
          <v-list-item-title>EN</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageMenu",
  watch: {
    selectedLanguage: function (val) {
      this.$i18n.locale = val.toLowerCase()
    }
  },
  data: function () {
    return {
      selectedLanguage : this.$i18n.locale.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>
