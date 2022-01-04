<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">{{ $t('garden1') }}</h1>
      </v-row>
      <v-row justify="center"><span class="text-caption">2021-01-05</span></v-row>
      <v-row>
        <v-img src="@/assets/articles/mbc/cover.jpg" :aspect-ratio="16/9" contain height="65vh" alt="MBC & Netflix cover image"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">

          <span v-html="$t('mbc2')"/>

          <v-img class="mt-16" src="@/assets/articles/mbc/welcome.jpg" max-height="400" contain alt="Logo Welcome first time in Korea"/>
          <div class="text-center mb-16"><i class="text-caption">{{ $t('captionPoster') }}</i></div>

          <span v-html="$t('mbc3')"/>

          <v-img class="mt-16" src="@/assets/articles/mbc/wtf.gif" max-height="400" contain alt="WTF gif"/>
          <div class="text-center mb-16"><i class="text-caption">{{ $t('captionReaction') }}</i></div>

          <span v-html="$t('mbc4')"/>

          <v-img class="mt-16" src="@/assets/articles/mbc/mbclobby.jpg" max-height="400" contain alt="Lobby du MBC Dream Center"/>
          <div class="text-center mb-16"><i class="text-caption">{{ $t('captionLobby') }}</i></div>

          <span v-html="$t('mbc5')"/>
          (<v-btn color="primary" icon @click="copyToClipBoard()"><v-icon>mdi-content-copy</v-icon></v-btn>)
          <span v-html="$t('mbc5_2')"/>

          <v-img class="mt-16" src="@/assets/articles/mbc/netflix-thumbnail.jpg" max-height="400" contain alt="Vignette du tv show sur Netflix"/>
          <div class="text-center mb-16"><i class="text-caption">{{ $t('captionNetflix') }}</i></div>

          <span v-html="$t('mbc6')"/>

          <v-row class="flex-wrap" justify="center">
            <v-col cols="12" sm="6" md="4">
              <v-img src="@/assets/articles/mbc/crew.jpg" alt="Photo de l'équipe de tournage dans le resto de 닭갈비" class="my-1"/>
              <v-img src="@/assets/articles/mbc/riz.jpg" alt="Ils m'ont vraiment foutu la honte" class="my-1"/>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-img src="@/assets/articles/mbc/crew-street.jpg" alt="Remballage des caméras en fin de tournage" class="my-1"/>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-img src="@/assets/articles/mbc/me-alberto.jpg" alt="Moi et Alberto Mundi la re-sta pendant le tournage studio" class="my-1"/>
              <v-img src="@/assets/articles/mbc/studio.jpg" alt="Studio du TV Show" class="my-1"/>
            </v-col>
          </v-row>

          <span v-html="$t('mbc7')"/>

          <span class="text-caption">2021-01-05</span>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "garden-article",
  metaInfo() {
    return {
      title: this.$t('mbc1') + ' | Kebinou',
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
