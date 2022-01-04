<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">Nutella 호떡 (Hotteok)</h1>
      </v-row>
      <v-row justify="center"><span class="text-caption">2021-11-22</span></v-row>
      <v-row>
        <v-img src="@/assets/articles/hotteok/cover.jpg" height="65vh" alt="Hotteok au Nutella"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <fr-hotteok-content v-if="$i18n.locale === 'fr'"/>
      <en-hotteok-content v-else/>
      <v-row>
        <v-divider class="ma-16"/>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="3">
          <address-card v-bind="{name: '삼맛호오떡', imageName: 'hotteok.jpg',
                        price: '3000 (~2€)', phone: '02-2299-3396', naverLink: 'http://naver.me/GgeusipV'}"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import AddressCard from "../../AddressCard";
import EnHotteokContent from "./EnHotteokContent";
import FrHotteokContent from "./FrHotteokContent";
export default {
  name: "HotteokArticle",
  components: {EnHotteokContent, FrHotteokContent, AddressCard},
  metaInfo: {
    title: 'Nutella Hotteok | Kebinou',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: "Apprenez-en plus sur le légendaire et délicieux Hotteok au Nutella que votre serviteur Kebinou est allé tester pour vous!"
    }]
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
