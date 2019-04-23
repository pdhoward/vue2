import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var data = { a: 1,    
             seen: true }

new Vue({
  data: data,
  created: function() {
    // eslint-disable-next-line no-console
    console.log(`at creation the value of a is ${this.a}`)
  },
  mounted: function() {
    // eslint-disable-next-line no-console
    console.log(`at mount the value of a is ${this.a}`)
  },
  render: h => h(App),
}).$mount('#app')
