<template>
  <v-container fluid class="home">
    <div id="categories" class="d-flex flex-column home__section">
<!--      <v-row>-->
<!--        <v-col cols="3">-->
<!--          <category-thumbnail title="Bouffe" image-name="bouffe.jpg"/>-->
<!--        </v-col>-->
<!--        <v-col cols="3">-->
<!--          <category-thumbnail title="Culture" image-name="culture.jpg"/>-->
<!--        </v-col>-->
<!--        <v-col cols="3">-->
<!--          <category-thumbnail title="Spot" image-name="spot2.jpg"/>-->
<!--        </v-col>-->
<!--        <v-col cols="3">-->
<!--          <category-thumbnail title="Activité" image-name="spot.jpg"/>-->
<!--        </v-col>-->
<!--      </v-row>-->
      <v-row justify="center" align="center" class="home__scroll">
        <v-btn icon x-large @click="$vuetify.goTo('#articles')">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-row>
    </div>
    <div id="articles" class="d-flex flex-column home__section">
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src

// import CategoryThumbnail from "../components/CategoryThumbnail";
export default {
  name: 'Home',
  components: {
    // CategoryThumbnail
  }
}
</script>
<style lang="scss">
.home {
  padding: 0;
  &__section {
    height: 100vh;
    padding: 92px 15px 15px 15px;
  }
  &__scroll {
    margin: 0;
  }
}
</style>
