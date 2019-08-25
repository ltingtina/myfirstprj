import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 
import Login from '@/components/login/Login' 
import myindex from '@/components/login/myindex'
/* import leading from '@/components/login/leading' */

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: app
    },
    {
      path:'/myindex',
      component: myindex,
      name: 'myindex'
    },
    {
      path:'/Login',
      component: Login,
      name: 'login'
    },
    {
      path:'/HelloWorld',
      component: HelloWorld
    }
  ]
})
