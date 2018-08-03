import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import photoes from '@/components/photoes/photoes'
import archive from '@/components/archive/archive'
import me from '@/components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/photoes',
      name: 'photoes',
      component: photoes
    },{
      path: '/archive',
      name: 'archive',
      component: archive
    },{
      path: '/me',
      name: 'me',
      component: me
    }
  ],
  mode: 'hash',
　scrollBehavior(to, from, savedPosition) {
　　　if (to.hash) {
　　　　　return {
　　　　　　　selector: to.hash
　　　　　}
　　　}
  }
})
