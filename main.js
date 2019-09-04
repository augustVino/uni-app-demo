import Vue from 'vue'
import App from './App'

import MinRequest from '@/utils/MinRequest.js'
import minRequest from '@/utils/api.js'
Vue.use(MinRequest);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	minRequest
})
app.$mount()
