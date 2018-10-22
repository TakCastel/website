<template>
  <v-card
    :class="isFullScreen ? 'fullscreen' : 'bottom'"
    class="player"
  >
    <vo-player-controls
      :status="status"
    />
    <vo-player-metadatas
      :metadatas="podcast"
    />
    <vo-player-progress
      :progress="progress"
    />
    <vo-player-cover
      :image="podcast.cover"
    />
    <vo-player-layout/>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      status: state => state.player.isPlaying,
      podcast: state => state.player.podcast,
      progress: state => state.player.currentTime
    })
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
    position: fixed;
    align-items: center;
    justify-content: space-between;
    left: 16px;
    right: 16px;
    bottom: 52px;
  }
  .fullscreen {
    align-items: stretch;
    justify-content: center;
    flex-direction: column-reverse;
    top: 0; left: 0; bottom: 0; right: 0;
  }

  @media screen and (max-width: 600px) {
    .bottom {
      bottom: 72px;
    }
  }
</style>
