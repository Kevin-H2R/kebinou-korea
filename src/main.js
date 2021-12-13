import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from "./plugins/i18n";
import router from './router'

Vue.config.productionTip = false


let locale = 'fr'
const enIndex = navigator.languages.indexOf('en')
const frIndex = navigator.languages.indexOf('fr')
if (enIndex !== -1 && (frIndex === -1 || enIndex < frIndex)) {
  locale = 'en'
}
i18n.locale = locale

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
