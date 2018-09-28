export default {
  state: {
    isPlaying: false,
  },
  actions: {
    clickPlayButton ({ state, commit }) {
      let status
      state.isPlaying ? status = false : status = true
      commit('setPlayerStatus', status)
    }
  },
  mutations: {
    setPlayerStatus (state, status) {
      state.isPlaying = status
    }
  }
}