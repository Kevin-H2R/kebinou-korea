<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <p class="article__p"><vocab-word v-bind="vocab.today"/> je vous amène dans un endroit <b>féerique</b>.
        Et je n'exagère rien! Le Jardin du Matin Calme est un arboretum situé à quelques dizaines de kilomètre
        de Séoul, à 가평 (Gapyeong). J'y suis allé en train/bus, 2H15 depuis Hongdae, il y a également l'ITX (train express) qui ne
        met qu'environ 1h à y aller mais il faut réserver sa place à l'avance.</p>

      <p>En résumé: 30000m² de superficie, 5000 types de <vocab-word v-bind="vocab.plant"/>, 20 sections différentes,
        600000 visiteurs / an. Il y a de quoi faire !<br/>
        Il s'y déroule un festival différent lors de chaque saison, donc vous pouvez y allez quand vous voulez. Moi
        j'y suis aller en hiver, la nuit du 31 Décembre exactement et s'y tenait le magnifique festival des lumières.<br/>
        Des images valent 1000 mots comme on dit, donc je vous laisse avec quelques photos que j'ai prise durant ma visite.<br/>
        Pour la petite anecdote, il faisait -12°C (ressenti -15), j'ai donc du supprimer 3/4 de mes photos pour cause de
        tremblements dûs au froid 😅.
      </p>


      <p></p>
      <p></p>
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
        plant: {word: "plantes", korean: "식물", phonetic: 'sigmul'},
      }
    }
  }
}
</script>

<style scoped>

</style>
