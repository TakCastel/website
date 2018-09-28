<template>
  <v-btn @click="handleClick">
    <span v-if="status">
      Pause
    </span>
    <span v-else>
      Play
    </span>
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
