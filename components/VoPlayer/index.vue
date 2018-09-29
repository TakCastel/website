<template>
  <v-card
    class="player"
  >
    <vo-player-controls
      :status="status"
    />
    <vo-player-metadatas
      :metadatas="podcast.metadatas"
    />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      status: state => state.player.isPlaying,
      podcast: state => state.player.podcast
    })
  }
}
</script>

<style lang="scss">
  .player {
    position: absolute;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
</style>
