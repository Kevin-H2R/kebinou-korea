<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <p class="article__p"><vocab-word v-bind="vocab.today"/> I bring you with me in a <b>mesmerizing</b> place.
        And I'n not even exaggerating! The Morning Calm Garden is an arboretum located at a few dozen of kilometers of
        Seoul, in 가평 (Gapyeong). J'y suis allé en train/bus, 2H15 depuis Hongdae, il y a également l'ITX (train express) qui ne
        met qu'environ 1h à y aller mais il faut réserver sa place à l'avance.</p>

      <p>En résumé: 30000m² de superficie, 5000 types de <vocab-word v-bind="vocab.plant"/>, 20 sections différentes,
        600000 visiteurs / an. Il y a de quoi faire !<br/>
        Il s'y déroule un festival différent lors de chaque saison, donc vous pouvez y allez quand vous voulez. Moi
        j'y suis aller en <vocab-word v-bind="vocab.winter"/>, la <vocab-word v-bind="vocab.night"/> du 31 Décembre
        exactement et s'y tenait le magnifique festival des lumières.<br/>
        Des images valent 1000 <vocab-word v-bind="vocab.word"/> comme on dit, donc je vous laisse avec quelques photos
        que j'ai prise durant ma visite.<br/>
        Pour la petite anecdote, il faisait -12°C (ressenti -15), j'ai donc du supprimer 3/4 de mes photos pour cause de
        tremblements dûs au froid 😅.</p>

      <v-row class="flex-wrap mt-16" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/garden/arrow.jpg" alt="Cupidon de wish" class="my-1"/>
          <v-img src="@/assets/articles/garden/fromTheBridge.jpg" alt="Vue du pont" class="my-1"/>
          <v-img src="@/assets/articles/garden/templeOnFrozenLake.jpg" alt="Temple sur lac gelé" class="my-1"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/garden/frozenLake.jpg" alt="reflet des lumières sur le lac gelé" class="my-1"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/garden/meAndHearts.jpg" alt="C'est un mur porteur ca" class="my-1"/>
          <v-img src="@/assets/articles/garden/lotsOfLights.jpg" alt="Beaucoup de lumière" class="my-1"/>
        </v-col>
      </v-row>

      <span class="text-caption">2021-01-05</span>

      <v-divider class="ma-16"/>

      <v-row class="mb-16">
        <vocab-list :vocab="vocab"/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import VocabWord from "../../VocabWord";
import VocabList from "../../VocabList";
export default {
  name: "EnGardenContent",
  components: {VocabWord, VocabList},
  data() {
    return {
      vocab: {
        today: {word: "Aujourd'hui", korean: "오늘", phonetic: 'oneul'},
        plant: {word: "plantes", korean: "식물", phonetic: 'sigmul'},
        winter: {word: "hiver", korean: "겨울", phonetic: 'gyeoul'},
        night: {word: "nuit", korean: "밤", phonetic: 'bam'},
        word: {word: "mots", korean: "단어", phonetic: 'daneo'},
      }
    }
  }
}
</script>

<style scoped>

</style>
