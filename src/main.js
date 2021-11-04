import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'pretty-checkbox-vue/dist/pretty-checkbox-vue.min.js'
import PrettyCheckbox from 'pretty-checkbox-vue'
import PrettyInput from 'pretty-checkbox-vue/input';

Vue.component('p-input', PrettyInput);

Vue.use(PrettyCheckbox);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
