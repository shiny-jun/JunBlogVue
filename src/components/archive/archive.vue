<template>
    <div class="archive" id="searchBar" v-loading="loading">
          <div class="tag" :class="searchBarFixed == true ? 'isFixed' :''">
            <el-tag type="warning" v-for="(allArticle,index) in allArticles" :key="index">
              <a id="category" href="javascript:void(0)" rel="external nofollow" @click="goAnchor('#anchor-'+allArticle.category_name)">
                {{allArticle.category_name}}
              </a>
            </el-tag>
          </div>
          <div class="article" v-for="(allArticle,index) in allArticles" :key="index">
            <div class="article-type">
              <span class="item" :id="'anchor-'+allArticle.category_name">
                {{allArticle.category_name}}
              </span>
            </div>
              <div class="article-item" v-for="(article,index2) in allArticle.archives" :key="index2">
                <router-link :to = "{path:'/archiveDetail',name:'archiveDetail',params:{contentId:article.content_id}}">
                <h2 class="article-title">
                  {{article.title}}
                </h2>
                <p class="article-detail">
                  {{article.bloginfo}}
                </p>
                <div class="article-info">
                  {{article.createtime}}&nbsp;&nbsp;已读：{{article.readtime}}
                </div>
                </router-link>
              </div>
          </div>
    </div>
</template>
<script>
import {getDate} from "@/common/js/util.js";

export default {
  data() {
    return {
      allArticles: [],
      searchBarFixed: false,
      loading: true
    };
  },
  mounted() {
    // getCategoryList
    var _this = this;
    this.$axios
      .get("http://120.78.235.137/JunBlog-php/allArchivesList.php")
      .then(function(response) {
        _this.loading = false;
        _this.allArticles = response.data;
        
      })
      .catch(function(response) {
        console.log(response);
      });
    window.addEventListener("scroll", _this.handleScroll);//监听到顶部的距离
    // 判断是否带锚链接点击进来的
    if (this.$route.query.category_name) {
      let category_name = this.$route.query.category_name;
      // console.log(category_name)
      // document.querySelector('#anchor-'+category_name).scrollIntoView(true)
      this.goAnchor('#anchor-'+category_name)
    }
  },
  methods: {
    handleScroll() {
      //到顶部的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#searchBar").offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    },
    // 锚链接
    goAnchor(selector) {
      var category = document.getElementById("category");
      console.log(selector);
      console.log(this.$el)
      var anchor = this.$el.querySelector(selector);
      console.log(anchor);
      document.documentElement.scrollTop = anchor.offsetTop - 100;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
.item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: top;
}
.el-tag {
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }
  a {
    color: #e6a23c;
  }
}
.article-item {
  a {
    .article-title, .article-detail{
      padding-top: 30px;
      color: #000000;
    }
    color: #888888;
    &:hover {
      .article-title {
        color: #e6a23c;
      }
      color: #e6a23c;
    }
    .article-detail{
      padding: 10px;
    }
    .article-info{
      font-size: 13px;
      padding-bottom: 10px;
    }
  }
}
</style>
