<template>
  <div class="banner-body">
        <head-nav></head-nav>
        <div class="container">
        <transition name="fade" mode="out-in">         
            <router-view/>
            </transition>

        <transition name="fade" mode="out-in">         

            <footNav v-show="show"></footNav>    
            </transition>

        </div>
        
  </div>
</template>

<script>
import footNav from '@/components/comment/footNav'
import headNav from '@/components/comment/headNav'
 
export default {
  name: 'App',
  data(){
    return{
      show : true,
      path:this.$route.path
    }
  },
  components: {
    footNav,headNav
  },
  created () {
    document.body.addEventListener('touchstart',function(){})
  },
  methods:{
  },
  watch:{
    '$route':function(){
      this.show = !this.show;
      setTimeout(() => {
      this.show = !this.show;
      }, 100);
    }
  }
}
</script>

<style lang="less">
@import './common/css/transition.less';
@import './common/css/reset.css';
@import './common/css/jun_blog.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
}

</style>
