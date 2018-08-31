// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 代码高亮插件
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/default.css';
Vue.use(VueHighlightJS);
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1,    //预加载高度的比例
  error: 'common/images/sad.png',  //图像的src加载失败
  loading: 'http://120.78.235.137/images/carousel/carousel3_min.jpg', //src的图像加载
  attempt: 1,  //尝试计数
  listenEvents: [ 'scroll', 'mousewheel' ] //你想要监听的事件,我个人喜欢全部监听，方便
  });
import Promise from 'es6-promise'
Promise.polyfill()

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
