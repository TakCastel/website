<template>
  <v-btn
    :ripple="false"
    :class="{ self_end: isFullScreen}"
    icon
    color="transparent"
    @click="handleClick">
    <v-icon 
      v-if="isFullScreen" 
      color="white">
      expand_more
    </v-icon>
    <v-icon 
      v-else 
      color="white">
      expand_less
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.dispatch('clickLayoutButton')
    }
  }
}
</script>