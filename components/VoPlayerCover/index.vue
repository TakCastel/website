<template>
  <v-img
    v-if="isFullScreen"
    :src="image"
    :lazy-src="image"
    aspect-ratio="1"
    class="grey lighten-2 desktop-img"
  >
    <v-layout
      slot="placeholder"
      fill-height
      align-center
      justify-center
      ma-0
    >
      <v-progress-circular 
        indeterminate 
        color="grey lighten-5"
      />
    </v-layout>
  </v-img>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 960px) and (orientation: landscape) {
    .desktop-img {
      width: 75vh;
      align-self: center;
      flex: 0 auto;
    }
  }
</style>
