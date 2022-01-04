<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <p class="article__p"><vocab-word v-bind="vocab.today"/> je vous amène dans un endroit <b>féerique</b>.
        Et je n'exagère rien! Le Jardin du Matin Calme est un arboretum situé à quelques dizaines de kilomètre
        de Séoul. J'y suis allé en train/bus, 2H15 depuis Hongdae.
      </p>
    </v-col>
  </v-row>
</template>

<script>
import VocabWord from "../../VocabWord";
export default {
  name: "FrGardenContent",
  components: {VocabWord},
  data() {
    return {
      vocab: {
        today: {word: "Aujourd'hui", korean: "오늘", phonetic: 'oneul'},
      }
    }
  }
}
</script>

<style scoped>

</style>
