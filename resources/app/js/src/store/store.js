import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// import moduleTodo from './todo/moduleTodo.js'
// import moduleCalendar from './calendar/moduleCalendar.js'
// import moduleChat from './chat/moduleChat.js'
// import moduleEmail from './email/moduleEmail.js'
// import moduleAuth from './auth/moduleAuth.js'
// import moduleAuth_ from './auth_/moduleAuth.js'
import moduleECommerce from './eCommerce/moduleECommerce.js'


export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    // todo: moduleTodo,
    // calendar: moduleCalendar,
    // chat: moduleChat,
    // email: moduleEmail,
    // auth: moduleAuth,
    // auth_: moduleAuth_,
    eCommerce: moduleECommerce
  },
  strict: process.env.NODE_ENV !== 'production'
})
