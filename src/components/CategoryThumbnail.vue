<template>
  <v-hover v-slot="{ hover }">
    <v-card hover elevation="12">
      <v-img max-height="600"
          :src="image"
      >
        <v-expand-transition>
          <div v-if="hover"
               class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal text-h2 white--text"
               style="height: 100%;">
            {{ title }}
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "category-thumbnail",
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
      return require('@/assets/' + this.imageName)
    }
  }
}
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
