<template>
  <div>
    the player event handler
    <vo-player-metadatas/>
    <vo-player-controls
      :status="isPlaying"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isPlaying: state => state.player.isPlaying
    })
  }
}
</script>
