<template>
    <el-row>
        <el-col :xs="24" :sm="18">
          <div class="block">
          </div>
            <div class="post-preview" v-for="(post,index) in posts" :key="index">
                <post-view :post="post"/>
            </div>
        </el-col>
        <el-col :xs="24" :sm="6">
            <right-bar/>
        </el-col>
    </el-row>
</template>

<script>
import postView from "./components/postView";
import rightBar from "./components/rightBar";
export default {
  name: "home",
  data() {
    return {
      posts: [
        {
          title: "Hey,欢迎来到我的世界！",
          subtitle: "Hey,Wellcome to my world!",
          content:
            "test test",
          author: "shiny_jun",
          date: "2018.07.26"
        }
      ]
    };
  },
  components: {
    postView,
    rightBar,
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-col {
  padding: 5px 20px;
}
.block {
  padding-bottom: 40px;
}
</style>
