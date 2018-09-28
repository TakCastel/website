export default {
  state: {
    isPlaying: false,
    podcast: {
      metadatas : {
        title: 'Podcast title',
        author: 'Grougrou'
      }
    }
  },
  actions: {
    /**
     * Launched when the user click on the play button
     * We check the player status before committing mutation
     * so the play/pause toggle is fully supported
     */
    clickPlayButton ({ state, commit }) {
      let status
      state.isPlaying ? status = false : status = true
      commit('setPlayerStatus', status)
    }
  },
  /**
   * Playing or paused player status change 
   */
  mutations: {
    setPlayerStatus (state, status) {
      state.isPlaying = status
    }
  }
}