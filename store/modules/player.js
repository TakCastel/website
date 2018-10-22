export default {
  state: {
    // player global state
    isPlaying: false,
    layoutMode: 'fixedBottom',
    podcast: {
      metadatas : {
        author: 'Author',
        cover: 'https://picsum.photos/640',
        title: 'Podcast title with long text lorem ipsum'
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
      let status = state.isPlaying ? false : true
      commit('setPlayerStatus', status)
    },

    /**
     * Launched when the user click on layout button
     * to display fullscreen mode or bottom player
     */
    clickLayoutButton ({ state, commit }) {
      let mode
      state.layoutMode === 'fullScreen' ? 
        mode = 'fixedBottom' : 
        mode = 'fullScreen'
      commit('setLayoutMode', mode)
    }
  },

  mutations: {
    /**
     * Playing or paused player status change 
     */
    setPlayerStatus (state, status) {
      state.isPlaying = status
    },

    /**
     * Fullscreen or fixed bottom player mode
     */
    setLayoutMode (state, mode) {
      state.layoutMode = mode
    },

    /**
     * Update the currentTime via passed value
     */
    updateCurrentTime (state, value) {
      state.currentTime = value
    }
  }
}