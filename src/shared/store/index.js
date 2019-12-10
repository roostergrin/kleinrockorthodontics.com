import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app: {},
    // blog: {},
    // sortedBlog: {},
    loading: true,
    pages: {},
    scrolled: {},
    navState: '',
    navDrawer: false,
    animationState: {
      'home-welcome': false
    }
  },
  mutations: mutations,
  actions: actions
})

export default store
