<template>
<v-card hover @click="goToArticle()">
  <v-img :src="image" height="200"
         class="white--text align-end"
         gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
    <v-card-title>{{ title }}</v-card-title>
  </v-img>
  <v-card-actions>
    <v-chip v-for="(cat, index) in categories"
            :key="imageName + '_category_' + index"
            color="warning" outlined disabled>
      {{ convertCategory(cat) }}
    </v-chip>
    <v-spacer />
    <v-btn plain color="primary">Lire</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: "article-thumbnail",
  props: {
    title: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false,
      default: '/'
    },
    categories: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    image: function () {
      return require('@/assets/thumbnails/' + this.imageName)
    }
  },
  methods: {
    convertCategory: function (category) {
      if (category === 'food') return "Bouffe"
      if (category === 'culture') return "Culture"
      if (category === 'activities') return "Activités"
      return "Spot"
    },
    goToArticle: function () {
      window.scrollTo(0, 0)
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang="scss">

</style>
