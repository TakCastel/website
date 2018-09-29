<template>
  <v-card
    :class="isFullScreen ? 'fullscreen' : 'bottom'"
    class="player"
  >
    <vo-player-controls
      :checkmode="isFullScreen"
      :status="status"
    />
    <vo-player-metadatas
      :metadatas="podcast.metadatas"
    />
    <vo-player-layout
      :checkmode="isFullScreen"
    />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      status: state => state.player.isPlaying,
      podcast: state => state.player.podcast,
      layout: state => state.player.layoutMode
    }),

    isFullScreen: function () {
      return this.layout === 'fullScreen'
    }
  }
}
</script>

<style lang="scss" scoped>
  .player {
    position: fixed;
    display: flex;
    z-index: 2;
  }
  .bottom {
    position: absolute;
    align-items: center;
    justify-content: space-between;
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
  .fullscreen {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    top: 0; left: 0; bottom: 0; right: 0;
  }
</style>
