import Vuex from 'vuex'

import player from './modules/player'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      player
    },
    state: {
      
    },
    actions: {

    },
    mutations: {
      
    },
    getters: {

    }
  })
}

export default createStore