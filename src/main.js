import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/icons/plugin'
import '@/permission'

Vue.use(SvgIcon)

Vue.use(Element, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
