<template>
  <v-card
    :class="{ 'my-3 self_center': isFullScreen }"
    class="transparent"
    flat>
    <v-btn 
      v-if="isFullScreen"
      color="transparent"
      icon>
      <v-icon>replay_10</v-icon>
    </v-btn>
    <v-btn
      icon
      fab
      dark
      color="primary"
      @click="handleClick">
      <v-icon v-if="status">pause</v-icon>
      <v-icon v-else>play_arrow</v-icon>
    </v-btn>
    <v-btn 
      v-if="isFullScreen"
      color="transparent"
      icon>
      <v-icon>forward_10</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    },
  },

  methods: {
    handleClick () {
      this.$store.dispatch('clickPlayButton')
    }
  }
}
</script>
