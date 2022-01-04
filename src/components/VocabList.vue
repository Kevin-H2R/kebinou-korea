<template>
  <v-expansion-panels tile>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-icon class="flex-grow-0 mr-5" color="primary">mdi-information</v-icon>
        {{ $t('vocab') }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>
          <v-row v-for="(item, index) in vocab" :key="'vocab_word_' + index" align="center">
            <span class="vocab-list__word">{{ item.word }}</span>:
            <span class="ml-5">{{ item.korean }} ({{ item.phonetic }})</span>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "VocabList",
  props: {
    vocab: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.vocab-list {
  &__word {
    color: #1976D2;
    font-weight: bold;
  }
}
</style>
