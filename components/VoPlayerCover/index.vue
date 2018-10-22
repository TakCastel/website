<template>
  <v-img
    v-if="isFullScreen"
    :src="image"
    :lazy-src="image"
    :class="{ static: isFullScreen }"
    aspect-ratio="1"
    class="grey lighten-2"
    height="100"
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
  .static {
    position: static;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
</style>
