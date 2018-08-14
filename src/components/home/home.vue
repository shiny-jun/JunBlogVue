<template>
    <el-row>
        <el-col :xs="24" :sm="18">
          <div class="block">
          </div>
            <post-view />
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
    };
  },
  components: {
    postView,
    rightBar,
  },
  
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
