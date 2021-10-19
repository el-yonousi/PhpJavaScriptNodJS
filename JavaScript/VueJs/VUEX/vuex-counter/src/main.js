import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


createApp(App).use(store).mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//     store,
//     render: h => h(App)
// }).$mount('#app')