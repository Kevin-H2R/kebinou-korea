<template>
<v-card hover @click="goToArticle()">
  <v-img :src="image" height="200"
         class="white--text align-end"
         gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
         :alt="title" >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="text-caption">{{ date }}</v-card-subtitle>
  </v-img>
  <v-card-actions>
    <v-chip v-for="(cat, index) in categories"
            :key="imageName + '_category_' + index"
            color="success">
      {{ convertCategory(cat) }}
    </v-chip>
    <v-spacer />
    <v-btn text color="primary">Lire</v-btn>
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
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    image: function () {
      return require('@/assets/' + this.imageName)
    }
  },
  methods: {
    convertCategory: function (category) {
      if (category === 'food') return this.$t('food')
      if (category === 'culture') return "Culture"
      if (category === 'activities') return this.$t('activities')
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
