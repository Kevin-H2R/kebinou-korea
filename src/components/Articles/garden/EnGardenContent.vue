<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <p class="article__p"><vocab-word v-bind="vocab.today"/> I bring you with me in a <b>mesmerizing</b> place.
        And I'n not even exaggerating! The Morning Calm Garden is an arboretum located at a few dozen of kilometers of
        Seoul, in 가평 (Gapyeong). I went there by bus + train, 2H15mins travel from Hongdae,
        you also have the option to take the ITX (express train) which takes ~1h to go there, but you gotta book your ticket in advance.</p>

      <p>In short: 30000m² area, 5000 types of <vocab-word v-bind="vocab.plant"/>, 20 different sections,
        600000 visitors / year. Plenty to see !<br/>
        There's a different festival at each season so you can go there all year long. I went there in
        <vocab-word v-bind="vocab.winter"/>, on the night of the 31st of December and at this time was held the
        wonderful lights festival.<br/>
        Images are worth 1000 <vocab-word v-bind="vocab.word"/> as we say, so I let you with some pictures I took there.<br/>
        Funny thing is, it was -12°C (felt as -15), so I had to delete 3/4 of the photos I took because I was
        shivering way too much  😅.</p>

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

      <div class="text-caption my-16"><i>Other pics to come, just drowning under work these days 😭</i></div>

      <div class="text-caption">2021-01-13</div>

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
