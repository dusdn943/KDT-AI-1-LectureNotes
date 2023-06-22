import Vue from 'vue'
import VueRouter from 'vue-router'

import trafficTestPage from '@/views/test/trafficTestPage'

Vue.use(VueRouter)

const testRoutes = [
    {
        path: '/traffic-test-page',
        name: 'trafficTestPage',
        component: trafficTestPage
      },

]

export default testRoutes
