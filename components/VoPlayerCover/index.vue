<template>
  <v-img
    v-if="isFullScreen"
    :src="image"
    :lazy-src="image"
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