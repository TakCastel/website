<template>
  <v-btn
    icon
    fab
    dark
    color="primary"
    @click="handleClick">
    <v-icon v-if="status">pause</v-icon>
    <v-icon v-else>play_arrow</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$store.dispatch('clickPlayButton')
    }
  }
}
</script>
