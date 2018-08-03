<template>
    <div class="archive">
        <div class="col-xs-12 col-md-3" id="searchBar">
            <ul class="nav nav-pills nav-stacked search" :class="searchBarFixed == true ? 'isFixed' :''">
                <li role="presentation" :class="activeName===allArticle.type?'active':''" v-for="(allArticle,index) in allArticles" :key="index">
                    <a :href="'#'+allArticle.type" @click="changeActive(allArticle.type)">
                        {{allArticle.type}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-md-9">
            <div class="article" v-for="(allArticle,index) in allArticles" :key="index">
                <div class="article-type">
                    <span class="glyphicon glyphicon-bookmark" :id="allArticle.type"></span>
                    {{allArticle.type}}
                </div>
                <div class="article-item" v-for="(article,index2) in allArticle.articles" :key="index2">
                    <h2 class="article-title">
                        {{article.title}}
                    </h2>
                    <h3 class="article-detail">
                        {{article.detail}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      allArticles: [
        {
          type: "JavaScript",
          articles: [
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            },
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            }
          ]
        },
        {
          type: "html",
          articles: [
            {
              title: "JavaScript可以获取浏览器提供的很多对象，并进行操作",
              detail: "window对象不但充当全局作用域，而且表示浏览器窗口。"
            }
          ]
        }
      ],
      searchBarFixed: false,
      activeName:''
    };
  },
  mounted() {
    //监听到顶部的距离
    window.addEventListener("scroll", this.handleScroll);
    this.activeName = this.allArticles[0].type;
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
    changeActive(type) {
        console.log(type)
        this.activeName = type;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
</style>
