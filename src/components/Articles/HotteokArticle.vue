<template>
    <v-container fluid class="article"
                 style="padding-top: 100px">
        <div class="d-flex flex-column justify-center" style="height: 90vh">
            <v-row justify="center" align="center">
                <h1 class="article__title font-weight-light">Nutella 호떡 (Hotteok)</h1>
            </v-row>
            <v-row>
                <v-img src="@/assets/articles/hotteok/cover.jpg" height="65vh" alt="Hotteok au Nutella"/>
            </v-row>
        </div>
        <div class="d-flex flex-column article__content">
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                  <span v-html="$t('hotteok1')"></span>
                  <v-img src="@/assets/articles/hotteok/stand.jpg" height="400" contain alt="Stand de street food"/>
                  <span v-html="$t('hotteok2')"></span>
                    <v-img src="@/assets/articles/hotteok/hotteok.jpg" height="400" contain alt="Hottoek au Nutella"/>

                    <v-img src="@/assets/articles/hotteok/video.gif" height="400" contain alt="Gif d'un Hotteok au Nutella"/>
                    <p>Envoyez-moi un message, taggez-moi sur vos story insta
                      (<a href="https://www.instagram.com/kebinou_korea/" target="_blank">@kebinou_korea</a>)
                      si vous allez tester un 호떡 hehe!<br> Bisous.</p>
                </v-col>
            </v-row>
          <v-row>
            <v-divider class="mx-16 my-16"></v-divider>
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
    import AddressCard from "../AddressCard";
    export default {
      name: "HotteokArticle",
      components: {AddressCard},
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
    //@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    .article {
        font-family: 'Abel', sans-serif;
        &__title {
            font-size: 4em;
        }
        &__content {
            font-size: 1.5em;
            font-weight: lighter;
            letter-spacing: 0.1em;
            line-height: 2.5em;
        }
        p {
            margin: 100px 0;
        }
      &__primary-text {
        color: #1976D2;
      }
    }
</style>
