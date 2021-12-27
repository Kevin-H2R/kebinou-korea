<template>
  <v-container fluid class="home">
    <v-container id="categories" class="home__section d-flex flex-column ">
      <v-row class="home__headline" justify="center">
        <v-col class="" cols="12" sm="10" md="6">
          <div class="text-h4 font-weight-light">Coucou ! Je m'appelle Kevin (aka Kebinou) je suis ingénieur informatique en Corée du Sud.</div>
          <div class="text-small font-weight-light my-10">
            J'aime les choses simples, ergonimiques, la patate douce et les citations d'OSS 117.<br/>
            J'ai fais ce blog pour répertorier les diverses choses que j'ai trouvé intéressantes à faire / déguster au pays du matin calme. <br/>
            <span class="font-weight-bold">Voyageons ensemble pour quelques minutes !</span></div>
        </v-col>
        <v-col cols="12" sm="10" md="4" class="text-center">
          <v-avatar width="150" height="150">
            <v-img src="@/assets/portrait1.jpg"/>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="food" image-name="bouffe.jpg"
                              @click.native="goToArticlesWithCategory('food')"/>
        </v-col>
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="Culture" image-name="culture.jpg"
                              @click.native="goToArticlesWithCategory('culture')"/>
        </v-col>
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="Spot" image-name="spot2.jpg"
                              @click.native="goToArticlesWithCategory('spot')"/>
        </v-col>
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="activities" image-name="spot.jpg"
                              @click.native="goToArticlesWithCategory('activities')"/>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="home__scroll flex-grow-0">
        <v-col class="text-center">
          <v-btn x-large @click="$vuetify.goTo('#articles')" color="transparent"
                 height="100" rounded :elevation="0" class="home__all-articles">
            <div @click="$vuetify.goTo('#articles')" >{{ $t('allArticles') }}</div><br/>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="articles" class="home__section">
      <v-row style="overflow: hidden">
        <v-btn-toggle
            v-model="category"
            tile
            color="primary accent-3"
            group
            mandatory
            v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-btn value="all">Tous</v-btn>
          <v-btn value="food">{{ $t('food') }}</v-btn>
          <v-btn value="culture">Culture</v-btn>
          <v-btn value="spot">Spot</v-btn>
          <v-btn value="activities">{{ $t('activities') }}</v-btn>
        </v-btn-toggle>
        <v-btn-toggle
            v-model="category"
            tile
            color="primary accent-3"
            group
            mandatory
            v-else
        >
          <v-btn value="all">Tous</v-btn>
          <v-btn value="food" icon><v-icon>mdi-food-fork-drink</v-icon></v-btn>
          <v-btn value="culture" icon><v-icon>mdi-book-open-page-variant</v-icon></v-btn>
          <v-btn value="spot" icon><v-icon>mdi-image-filter-hdr</v-icon></v-btn>
          <v-btn value="activities" icon><v-icon>mdi-basketball</v-icon></v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row>
        <v-col  v-for="(article, index) in displayedArticles"
                :key="'article_thumbnail_' + index"
                :cols="article.cols" :sm="article.sm" :md="article.md" :lg="article.lg"
        >
          <article-thumbnail :title="article.title"
                             :imageName="article.image"
                             :link="article.link"
                             :categories="article.categories"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="addresses" class="home__section">
      <v-row class="mb-8" justify="center">
        <h2 class="home__addresses-title">Liste résumée des diverses adresses présentent dans les articles :</h2>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3"
               v-for="(a, i) in this.addresses" :key="'address_' + i">
          <address-card v-bind="a" :read-article="true"/>
        </v-col>
      </v-row>
    </v-container>
    <about-me id="infos" class="home__section" v-show="false"/>
  </v-container>
</template>

<script>
// @ is an alias to /src

import CategoryThumbnail from "../components/CategoryThumbnail";
import ArticleThumbnail from "../components/ArticleThumnail";
import AddressCard from "../components/AddressCard";
import AboutMe from "../components/AboutMe";
export default {
  name: 'Home',
  components: {
    AboutMe,
    AddressCard,
    ArticleThumbnail,
    CategoryThumbnail
  },
  methods: {
    goToArticlesWithCategory: function (category) {
      this.category = category
      this.$vuetify.goTo('#articles')
    }
  },
  computed: {
    displayedArticles: function () {
      if (this.category === 'all') return this.articles
      return this.articles.filter(a => a.categories.includes(this.category))
    }
  },
  data: function() {
    return {
      articles: [
          {title: 'Nutella 호떡 (Hotteok)', image: 'hotteok.jpg', link:'/hotteok',
            cols: 12, sm: 10, md: 4, lg: 4,  categories: ['food', 'spot']}
      ],
      addresses: [
        {name: '삼맛호오떡', imageName: 'hotteok.jpg', path: "/hotteok",
          price: '3000 (~2€)', phone: '02-2299-3396', naverLink: 'http://naver.me/GgeusipV'}
      ],
      category: 'all'
    }
  },
  metaInfo: {
    title: 'Kebinou',
    meta: [{
      vmid: 'description',
      name: 'description',
        content: "Le blog des aventures de Kebinou en Corée du Sud. " +
            "Retrouvez un maximum de bons plans bouffe, culture, spot, " +
            "activités pour votre voyage au pays du matin calme."
      }]
  }
}
</script>
<style lang="scss">
.home {
  padding: 0;
  &__section {
    min-height: 100vh;
    padding: 92px 15px 15px 15px;
  }
  &__scroll {
    margin: 0;
  }
  &__all-articles {
    font-family: 'Abel', sans-serif;
  }

  &__headline {
    font-family: 'Abel', sans-serif;
    color: #3d3d3d;
  }
  &__all-articles:hover::before {
    opacity: 0 !important;
  }
  &__all-articles > .v-btn__content {
    display: flex;
    flex-direction: column;
  }
  &__addresses-title {
    font-family: 'Lobster', cursive;
    color: #1976D2;
  }
}

.text-small {
  font-size: 1em;
}
</style>
