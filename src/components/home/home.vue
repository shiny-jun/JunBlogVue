<template>
    <el-row>
        <el-col :xs="24" :sm="18">
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
            "Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。本文主要介绍less文件如何转化为css文件。1.首先，你要确认你的电脑已经安装了node。使用 npm 安装 lessc，命令行npm install -g less2.然后，进入需要转换的less文件的目标位置。3.最后，你只需输入以下两条命令：",
          author: "shiny_jun",
          date: "2018.07.26"
        }
      ]
    };
  },
  components: {
    postView,
    rightBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-col{
    padding: 5px 20px;
}
</style>
