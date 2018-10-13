<template>
  <v-card
    :class="isFullScreen ? 'fullscreen' : 'bottom'"
    class="player pt-2"
  >
    <vo-player-controls
      :status="status"
    />
    <vo-player-progress/>
    <vo-player-metadatas
      :metadatas="podcast.metadatas"
    />
    <vo-player-cover
      :image="podcast.metadatas.cover"
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
    bottom: 16px;
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
