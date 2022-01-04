<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">{{ $t('mbcTitle') }}</h1>
      </v-row>
      <v-row justify="center"><span class="text-caption">2021-12-29</span></v-row>
      <v-row>
        <v-img src="@/assets/articles/mbc/cover.jpg" :aspect-ratio="16/9" contain height="65vh" alt="MBC & Netflix cover image"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <fr-mbc-content v-if="$i18n.locale === 'fr'"/>
      <en-mbc-content v-else/>
    </div>
  </v-container>
</template>

<script>
import FrMbcContent from "./fr/FrMBCContent";
import EnMbcContent from "./en/EnMBCContent";
export default {
  name: "mbc-article",
  components: {EnMbcContent, FrMbcContent},
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText('어서와 한국은 처음이지')
    }
  },
  metaInfo() {
    return {
      title: this.$t('mbcTitle') + ' | Kebinou',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('metaDescriptionMBC')
      }]
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
