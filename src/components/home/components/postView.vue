<template>
    <div class="">
      <div class="post-preview" v-for="(post,index) in posts" :key="index">
        <el-row :gutter="10">
            <el-col :xs="0" :sm="2" >
                <a href="#" class="logo">
                    <img style="width:100%;" :src="post.logoImg" alt="image">
                </a>
            </el-col>
            <el-col :xs="24" :sm="22">
              <router-link class="archive" :to = "{path:'/archiveDetail',name:'archiveDetail',params:{contentId:post.content_id}}">
                <h2 class="article-title">{{ post.title }}</h2>
                <!-- <footer>{{ post.subtitle }}</footer> -->
                <p class="article-detail">{{ post.bloginfo }}</p>
                <p class="post-meta">
                    Posted by shiny-jun on {{ post.createtime }}
                </p> 
              </router-link>
            </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import { getDate, getLogoImg } from "@/common/js/util.js";
export default {
  name: "home",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    var _this = this;
    this.$axios
      .get("http://120.78.235.137/JunBlog-php/homeArchive.php")
      .then(function(response) {
        let len = response.data.length;
        for (let i = 0; i < len; i++) {
          let createtime = getDate(response.data[i].createtime);
          let logoImg = getLogoImg(response.data[i].category_id);
          response.data[i].createtime = createtime;
          response.data[i].logoImg = logoImg;
        }
        _this.posts = response.data;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
blockquote {
  margin: 0;
}
.post-preview {
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
h3 {
  padding: 5px 0 20px;
}
.logo {
  filter: alpha(opacity=50); /*IE滤镜，透明度50%*/
  -moz-opacity: 0.5; /*Firefox私有，透明度50%*/
  opacity: 0.5; /*其他，透明度50%*/
  transition: opacity 0.5s;
  -moz-transition: opacity 0.5s; /* Firefox 4 */
  -webkit-transition: opacity 0.5s; /* Safari and Chrome */
  -o-transition: opacity 0.5s; /* Opera */
}
.logo:hover {
  filter: alpha(opacity=100); /*IE滤镜，透明度50%*/
  -moz-opacity: 1; /*Firefox私有，透明度50%*/
  opacity: 1; /*其他，透明度50%*/
}
.archive {
  color: #888888;
  .article-title,
  .article-detail {
    color: #000000;
  }
  &:hover {
    .article-title,
    .article-detail {
      color: #e6a23c;
    }
    color: #e6a23c;
  }
  .article-detail {
    padding: 10px;
    &::after {
      content: "…";
    }
  }
  .post-meta {
    font-size: 13px;
  }
  p {
    font-size: 15px;
  }
}
@media screen and (max-width: 767px) {
  .archive {
    p {
      font-size: 14px;
    }
    .article-detail {
      padding: 10px 0;
    }
  }
}
</style>
