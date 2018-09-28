<template>
  <div>
    the player event handler
    <vo-player-metadatas/>
    <vo-player-controls
      :status="status"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      status: state => state.player.isPlaying
    })
  }
}
</script>
