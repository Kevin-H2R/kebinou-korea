<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">{{ $t('gardenTitle') }}</h1>
      </v-row>
      <v-row justify="center"><span class="text-caption">2021-01-13</span></v-row>
      <v-row>
        <v-img src="@/assets/articles/garden/cover2.jpg" height="65vh"
               alt="Lac gelé dans le jardin du Matin Calme"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <fr-garden-content v-if="$i18n.locale === 'fr'"/>
      <en-garden-content v-else/>
      <v-row>
        <v-divider class="ma-16"/>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="3">
          <address-card v-bind="{name: '아침고요수목원', imageName: 'garden.jpg',
                                  prices: [
                                      {category: $t('senior'), amount: '7500 (~5.5€)'},
                                      {category: $t('adult'), amount: '9500 (~9€)'},
                                      {category: $t('youth'), amount: '7000 (~5€)'},
                                      {category: $t('kids'), amount: '6000 (~4.5€)'},
                                    ],
                                  phone: '02-1544-6703', naverLink: 'http://naver.me/xCrjkvZm'}"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import FrGardenContent from "./FrGardenContent";
import EnGardenContent from "./EnGardenContent";
import AddressCard from "../../AddressCard";
export default {
  name: "garden-article",
  components: {EnGardenContent, FrGardenContent, AddressCard},
  metaInfo() {
    return {
      title: this.$t('gardenTitle') + ' | Kebinou',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('metaDescriptionGarden')
      }]
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
