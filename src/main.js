import Vue from 'vue'
// import Fragment from 'vue-fragment';

import App from './App.vue'
import 'leaflet/dist/leaflet.css';

import LDrawToolbar from 'vue2-leaflet-draw-toolbar';
Vue.component('l-draw-toolbar', LDrawToolbar);

Vue.config.productionTip = false

// Vue.use(Fragment.Plugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
