<template>
<v-card class="address-card">
  <v-img :src="image" height="200" class="address-card__map"
         alt="Map showing the location of the place" @click="openMap()" />
  <v-card-title>{{ name }}</v-card-title>
  <v-divider class="mx-4"/>
  <v-card-text>
    <v-container>
      <v-row class="my-5" v-for="(price, index) in prices" :key="name + '_price_' + index">
        <div class="text-decoration-underline">{{ price.category }}:</div>
        <v-icon class="ml-5 mr-2">mdi-currency-krw</v-icon>
        <div>{{ price.amount }}</div>
      </v-row>
      <v-row class="my-5">
        <v-icon class="mr-5">mdi-phone-classic</v-icon>
        <div>{{ phone }}</div>
      </v-row>
      <v-row class="my-5">
        <v-icon class="mr-5">mdi-map</v-icon>
        <div><a :href="naverLink" target="_blank">Map</a></div>
      </v-row>
    </v-container>
  </v-card-text>
  <v-divider v-if="readArticle"/>
  <v-card-actions v-if="readArticle">
    <v-spacer></v-spacer>
    <v-btn text color="primary" @click="goToArticle()">Lire l'article</v-btn>
    <v-spacer></v-spacer>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: "AddressCard",
  props: {
    name: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    prices: {
      type: Array,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    naverLink: {
      type: String,
      required: true
    },
    readArticle: {
      type: Boolean,
      required: false,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: "/"
    }
  },
  methods: {
    openMap: function () {
      window.open(this.naverLink, '_blank').focus();
    },
    goToArticle: function () {
      window.scrollTo(0, 0)
      this.$router.push(this.path)
    }
  },
  computed: {
    image: function () {
      return require('@/assets/map/' + this.imageName)
    }
  },
}
</script>

<style lang="scss">
.address-card {
  &__map {
    cursor: pointer;
  }
}
</style>
