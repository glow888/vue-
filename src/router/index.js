import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start.vue'
import Index from '@/components/index.vue'
import Pcontent from '@/components/pcontent.vue'
import Hot from '@/components/hot.vue'
import Search from '@/components/search.vue'
import Cart from '@/components/cart.vue'
Vue.use(Router)

export default new Router({
model:'hash',
  routes: [
    {path: '/start/:id',
     name:'start',
     component: Start
	  },
    {path: '/pcontent/:id',
     name:'pcontent',
     component: Pcontent
    },
    {path: '/hot',
     name:'hot',
     component: Hot
    },
    {path: '/search',
     name:'search',
     component: Search
    },
    {path: '/cart',
     name:'cart',
     component: Cart
    },
    {path: '/index',
     name:'index',
     component: Index
	}
  ]
})
