export default {
  state: {
    // player global state
    isPlaying: false,
    currentTime: 0,

    // layout handled in fullscreen.js plugin
    layoutMode: 'fixedBottom', // fixedBottom or fullScreen

    // podcast infos
    podcast: {
      author: 'Author',
      cover: 'https://picsum.photos/640',
      title: 'Podcast title'
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
    }
  },
  /**
   * Playing or paused player status change 
   */
  mutations: {
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