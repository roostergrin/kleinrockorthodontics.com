// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/app'
import router from './router'
import store from './shared/store'

/* eslint-disable */
import Components from './resources/components'
import { vendors } from './resources/vendors'
import { fonts } from './resources/fonts'
/* eslint-enable */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
