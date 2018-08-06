<template>
    <div class="head-nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#E0BD62" text-color="#EEDDAF" active-text-color="#fff">
        <el-menu-item index="/"><router-link :to="'/'">Home</router-link></el-menu-item>
        <el-menu-item index="/archive"><router-link :to="'/archive'">Archive</router-link> </el-menu-item>
        <el-menu-item index="/photoes"><router-link :to="'/photoes'">Photoes</router-link></el-menu-item>
        <el-menu-item index="/photoes"><router-link :to="'/photoes'">Foods Share</router-link></el-menu-item>
        <el-menu-item index="/me"><router-link :to="'/me'">About me</router-link></el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
@main-color: #e0bd62;
.head-nav {
  padding-bottom: 20px;
}
.el-menu-item{
  a{
    display: inline-block;
    height: 100%;
  }
}
</style>

