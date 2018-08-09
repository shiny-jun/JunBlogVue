<template>
    <div class="archive" id="searchBar">
          <div class="tag" :class="searchBarFixed == true ? 'isFixed' :''">
            <el-tag type="warning" v-for="(allArticle,index) in allArticles" :key="index">
              <a href="javascript:void(0)" rel="external nofollow" @click="goAnchor('#anchor-'+allArticle.category_nametype)">
                {{allArticle.category_name}}
              </a>
            </el-tag>
          </div>
          <div class="article" v-for="(allArticle,index) in allArticles" :key="index">
            <div class="article-type">
              <span class="item" :id="'anchor-'+allArticle.category_name"></span>
                {{allArticle.category_name}}
            </div>
              <div class="article-item" v-for="(article,index2) in allArticle.archives" :key="index2">
                <router-link :to = "{name:'archiveDetail',params:{archiveId:article.content_id}}">
                <h2 class="article-title">
                  {{article.title}}
                </h2>
                <h3 class="article-detail">
                  {{article.bloginfo}}
                </h3>
                <div>
                  {{article.createtime}}
                </div>
                <div>
                  已读：{{article.readtime}}
                </div>
                </router-link>
              </div>
          </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      allArticles: [],
      searchBarFixed: false
    };
  },
  mounted() {
    //监听到顶部的距离

    // getCategoryList
    var _this = this;
    this.$ajax
      .get("http://120.78.235.137/JunBlog-php/getCategoryList.php")
      .then(function(response) {
        console.log(response.data);
        _this.allArticles = response.data;
        window.addEventListener("scroll", this.handleScroll);
        this.activeName = this.allArticles[0].category_name;
      })
      .catch(function(response) {
        console.log(response);
      });
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
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector);
      console.log(anchor.offsetTop);
      document.documentElement.scrollTop = anchor.offsetTop - 50;
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
</style>
