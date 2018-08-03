<template>
    <div class="right-bar">
        <div class="modules">
            <h4><router-link :to="'/archive'">Archive Tags</router-link></h4>
            <div class="Archive-tags-item">
                <p v-for="(tag,index) in tags" :key="index"><el-tag type="warning">{{tag.name}}</el-tag></p>
            </div>
        </div>
        <div class="modules">
            <h4><router-link :to="'/me'">About Me</router-link></h4>
            <div class="about-me">
                <div class="avatar"></div>
                <div class="self-intor">我来自火星</div>
                <contact/>
            </div>
        </div>
    </div>
</template>

<script>
import contact from '@/components/comment/contact';

export default {
  name: 'home',
  props: ['post'],
  data () {
    return{
        tags:[{
            name:'javaScript'
        },{
            name:'html'
        },{
            name:'css'
        },{
            name:'vue'
        },{
            name:'es6',
        },{
            name:'jquery',
        },{
            name:'bootstrap'
        }]
    }
  },
  components:{
      contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.right-bar{
    overflow: hidden;
}
</style>
