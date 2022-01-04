<template>
  <v-tooltip top color="primary">
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on"
            class="vocab_word">{{ word }}</span>
    </template>
    <span><b>{{ korean }}</b> ({{ phonetic}})</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "VocabWord",
  props: {
    word: {
      type: String,
      required: true
    },
    korean: {
      type: String,
      required: true
    },
    phonetic: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.vocab_word {
  border-bottom: 2px dotted #1976D2;
}
</style>
