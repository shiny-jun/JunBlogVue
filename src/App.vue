<template>
  <div class="banner-body">
        <head-nav/>
        <div class="container">
          <router-view/>
          <footNav></footNav>
        </div>
        
  </div>
</template>

<script>
import footNav from '@/components/comment/footNav'
import headNav from '@/components/comment/headNav'
 
export default {
  name: 'App',
  components: {
    footNav,headNav
  },
  created () {
  }
  // methods:{
  //   wmuSlider(){
  //     $('.example1').wmuSlider();
  //   }
  // }
}
</script>

<style lang="less">
@import './common/css/jun_blog.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

</style>
