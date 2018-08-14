<template>
    <div class="right-bar">
        <div class="modules">
            <h4><router-link :to="'/photoes'">Photoes</router-link></h4>
            <carousel></carousel>
        </div>
        <div class="modules">
            <h4><router-link :to="'/archive'">Archive Tags</router-link></h4>
            <div class="Archive-tags-item">
                <p v-for="(tag,index) in tags" :key="index">
                    <router-link :to="{path:'/archive', query:{category_name:tag.category_name}}">
                        <el-tag type="warning">{{tag.category_name}}</el-tag>
                    </router-link>
                </p>
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
import carousel from "./carousel";

export default {
  name: 'home',
  props: ['post'],
  data () {
    return{
        tags:[]
    }
  },
  components:{
      contact,carousel
  },
  mounted() {
    var _this = this;
    this.$axios
      .get("http://120.78.235.137/JunBlog-php/getCategoryList.php")
      .then(function(response) {
        _this.tags = response.data;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.right-bar{
    overflow: hidden;
}
</style>
