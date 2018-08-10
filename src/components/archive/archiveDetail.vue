<template>
    <div>
        <el-row :gutter="40">
        <el-col :xs="24" :sm="18">
            {{ $route.params }}
        </el-col>
        <el-col :xs="0" :sm="4">
            nav
        </el-col>
        </el-row>
    </div>
</template>
<script>
import qs from 'qs';

export default {
  data() {
    return {};
  },
  mounted() {
    var contentId=parseInt(this.$route.params.contentId);
    console.log(contentId)
    this.$axios({
      method: "post",
      url: "http://120.78.235.137/JunBlog-php/archiveDetail.php",
      data: qs.stringify({
        contentId: contentId
      })
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};
</script>
<style lang="less" scoped>
.row {
  overflow: hidden;
}
@media screen and (min-width: 768px) {
  .img-text {
    border-top: solid 1px #d9d9d9;
    padding-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .img-text {
    border-bottom: solid 1px #d9d9d9;
    margin-bottom: 10px;
  }
}
</style>
