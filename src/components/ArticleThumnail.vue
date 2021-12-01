<template>
<v-card hover>
  <v-img :src="image" height="200"
         class="white--text align-end"
         gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
    <v-card-title>{{ title }}</v-card-title>
  </v-img>
  <v-card-actions>
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
    }
  },
  computed: {
    image: function () {
      return require('@/assets/thumbnails/' + this.imageName)
    }
  }
}
</script>

<style scoped>

</style>
