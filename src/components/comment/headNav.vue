<template>
    <div class="head-nav">
      <nav :class="showNavCss">
        <ul>
          <h2 class="logo">SHiny-Jun</h2>
          <li class="mobile" @click="changeShowNav"><i class="el-icon-menu"></i></li>
          <li class="pc"><router-link :to="'/'">Home</router-link></li>
          <li class="pc"><router-link :to="'/archive'">Archive</router-link></li>
          <li class="pc"><router-link :to="'/photoes'">Photoes</router-link></li>
          <li class="pc"><router-link :to="'/foods'">Foods Share</router-link></li>
          <li class="pc"><router-link :to="'/me'">About me</router-link></li>
        </ul>  
      </nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      showNav: false,
      showNavCss:''
    };
  },
  mounted() {},
  methods: {
    changeShowNav() {
      this.showNav = !this.showNav;
      if (this.showNav) {
        this.showNavCss = 'showNavCss';
      } else {
        this.showNavCss = 'researchNavCss';
      }
    }
  }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
@main-color: #e0bd62;
.head-nav {
  padding-bottom: 20px;
}
.el-menu-item {
  display: inline-block;
  a {
    height: 100%;
  }
}
// nav
nav {
  ul {
    // position: relative;
    background-color: #e0bd62;
    text-align: right;
    // height: 64px;
    .logo {
      float: left;
      height: 100%;
      line-height: 64px;
      color: #eeddaf;
      padding-left: 20px;
    }
    li {
      display: inline-block;
      height: 60px;
      line-height: 64px;
      a {
        position: relative;
        display: inline-block;
        color: #eeddaf;
        height: 100%;
        padding: 0 15px;
        &.router-link-exact-active {
          color: #fff;
          font-weight: 600;
          // border-bottom: 4px solid #fff;
        }
        &:before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -4px;
          width: 0;
          height: 4px;
          background: #fff;
          transition: all 0.3s;
        }
        &:hover:before {
          width: 100%;
          left: 0;
          right: 0;
        }
      }
    }
    .el-icon-menu {
      color: #eeddaf;
    }
  }
}
@media screen and (min-width: 767px) {
  .el-icon-menu {
    visibility: hidden;
  }
}
@media screen and (max-width: 767px) {
  .el-icon-menu {
    padding: 20px;
  }
  nav {
    height: 64px;
    overflow: hidden;
    ul {
      li {
        display: block;
      }
      .mobile{
        // display: block;        
      }
    }
  }
  // 移动端导航下拉动画
  .showNavCss {
    animation: showNav 0.5s;
    -moz-animation: showNav  0.5s; /* Firefox */
    -webkit-animation: showNav  0.5s; /* Safari 和 Chrome */
    -o-animation: showNav  0.5s; /* Opera */
    animation-fill-mode: forwards;
  }
  @keyframes showNav {
    0% {
      height: 64px;
    }
    100% {
      height: 360px;
    }
  }

  @-moz-keyframes showNav /* Firefox */ {
    0% {
      height: 64px;
    }
    100% {
      height: 184px;
    }
  }

  @-webkit-keyframes showNav /* Safari 和 Chrome */ {
    0% {
      height: 64px;
    }
    100% {
      height: 184px;
    }
  }

  @-o-keyframes showNav /* Opera */ {
    0% {
      height: 64px;
    }
    100% {
      height: 184px;
    }
  }
  // 移动端导航收缩
  .researchNavCss {
    animation: researchNav 0.5s;
    -moz-animation: researchNav  0.5s; /* Firefox */
    -webkit-animation: researchNav  0.5s; /* Safari 和 Chrome */
    -o-animation: researchNav  0.5s; /* Opera */
    animation-fill-mode: forwards;
  }
  @keyframes researchNav {
    0% {
      height: 360px;
    }
    100% {
      height: 64px;
    }
  }

  @-moz-keyframes researchNav /* Firefox */ {
    0% {
      height: 360px;
    }
    100% {
      height: 64px;
    }
  }

  @-webkit-keyframes researchNav /* Safari 和 Chrome */ {
    0% {
      height: 360px;
    }
    100% {
      height: 64px;
    }
  }

  @-o-keyframes researchNav /* Opera */ {
    0% {
      height: 360px;
    }
    100% {
      height: 64px;
    }
  }

}
</style>

