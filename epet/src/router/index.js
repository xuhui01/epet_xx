import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/main.vue'
import category from '../pages/category/category.vue'
import cart from '../pages/cart/cart.vue'
import login from '../pages/login/login.vue'
import category_tab1 from '../pages/category_tab1/category_tab1.vue'
import category_tab2 from '../pages/category_tab2/category_tab2.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: main
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/category',
      component: category,
      children: [
        {
          path: '',
          component: category_tab1
        },
        {
          path: '/category/tab1',
          component: category_tab1
        },
        {
          path: '/category/tab2',
          component: category_tab2
        }
      ]
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/login',
      component: login
    }
  ]
})
