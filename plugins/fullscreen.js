import Vue from 'vue'

Vue.mixin ({
  computed: {
    isFullScreen: function () {
      return this.$store.state.player.layoutMode === 'fullScreen'
    }
  } 
})