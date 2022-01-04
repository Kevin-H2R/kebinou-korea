<template>
  <v-container fluid class="home">
    <v-container id="categories" class="home__section d-flex flex-column">
      <v-row class="home__headline mt-10" justify="center">
        <v-col cols="12" sm="2" md="2" :class="$vuetify.breakpoint.smAndUp ? 'text-right' : 'text-center'">
          <v-avatar width="150" height="150">
            <v-img src="@/assets/portrait1.jpg" alt="C'est ma tete"/>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="10" md="6">
          <div v-html="$t('introduction')"></div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="food" image-name="bouffe.jpg"
                              @click.native="goToArticlesWithCategory('food')"/>
        </v-col>
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="culture" image-name="culture.jpg"
                              @click.native="goToArticlesWithCategory('culture')"/>
        </v-col>
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="spots" image-name="spot2.jpg"
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
          <article-thumbnail v-bind="article" />
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
        {title: this.$t('mbcTitle'), imageName: 'articles/mbc/cover.jpg', link:'/tv-show',
          cols: 12, sm: 10, md: 4, lg: 4,  categories: ['activities'], date: '2021-12-29'},
        {title: 'Nutella 호떡 (Hotteok)', imageName: 'thumbnails/hotteok.jpg', link:'/hotteok',
          cols: 12, sm: 10, md: 4, lg: 4,  categories: ['food', 'spot'], date: '2021-11-22'},
      ],
      addresses: [
        {name: '삼맛호오떡', imageName: 'hotteok.jpg', path: "/hotteok",
          price: '3000 (~2€)', phone: '02-2299-3396', naverLink: 'http://naver.me/GgeusipV'}
      ],
      category: 'all'
    }
  },
  metaInfo() {
    return {
      title: 'Kebinou',
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.$t('metaDescriptionHome')
      }]
    }
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
