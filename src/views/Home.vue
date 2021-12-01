<template>
  <v-container fluid class="home">
    <v-container id="categories" class="home__section d-flex flex-column justify-space-between">
      <v-row justify="center">
        <v-col cols="6" sm="10" md="6" lg="3">
          <category-thumbnail title="Bouffe" image-name="bouffe.jpg"
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
          <category-thumbnail title="Activité" image-name="spot.jpg"
                              @click.native="goToArticlesWithCategory('activities')"/>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="home__scroll flex-grow-0">
        <v-col class="text-center">
          <v-btn x-large @click="$vuetify.goTo('#articles')" color="transparent"
                 height="100" rounded :elevation="0" class="home__all-articles">
            <div @click="$vuetify.goTo('#articles')" >Tous les articles</div><br/>
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
          <v-btn value="food">Bouffe</v-btn>
          <v-btn value="culture">Culture</v-btn>
          <v-btn value="spot">Spot</v-btn>
          <v-btn value="activities">Activités</v-btn>
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
          <article-thumbnail :title="article.title" :imageName="article.image" :link="article.link"/>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src

import CategoryThumbnail from "../components/CategoryThumbnail";
import ArticleThumbnail from "../components/ArticleThumnail";
export default {
  name: 'Home',
  components: {
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
            cols: 12, sm: 10, md: 4, lg: 3,  categories: ['food', 'spot']}
      ],
      category: 'all'
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
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
  &__all-articles:hover::before {
    opacity: 0 !important;
  }
  &__all-articles > .v-btn__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
