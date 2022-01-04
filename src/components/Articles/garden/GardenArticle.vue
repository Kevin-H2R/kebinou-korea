<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">{{ $t('gardenTitle') }}</h1>
      </v-row>
      <v-row justify="center"><span class="text-caption">2021-01-05</span></v-row>
      <v-row>
        <v-img src="@/assets/articles/mbc/cover.jpg" :aspect-ratio="16/9" contain height="65vh" alt="MBC & Netflix cover image"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <fr-garden-content v-if="$i18n.locale === 'fr'"/>
      <en-garden-content v-else/>
    </div>
  </v-container>
</template>

<script>
import FrGardenContent from "./FrGardenContent";
import EnGardenContent from "./EnGardenContent";
export default {
  name: "garden-article",
  components: {EnGardenContent, FrGardenContent},
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
