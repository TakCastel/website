<template>
  <v-card 
    :class="{ 'progress_size hidden-xs-only': !isFullScreen }"
    class="transparent mx-2"
    flat>
    <v-slider 
      :value="value"
      @change="handleChange"
    />
  </v-card>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  computed: {
    /**
     * We pass the progress props as value
     */
    value: function () {
      return this.progress
    }
  },

  methods: {
    /**
     * Update the progress value in store
     */
    handleChange (sliderValue) {
      this.$store.commit('updateCurrentTime', sliderValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 600px) {
    .progress_size {
      flex: 1
    }
  }
</style>
