<template>
    <div class="archive-detail" v-loading="loading">
        <!-- <el-row :gutter="40">
        <el-col :xs="24" :sm="18">
            {{ $route.params }}
        </el-col>
        <el-col :xs="0" :sm="4">
            nav
        </el-col>
        </el-row> -->
        <div class="back" @click="routerback"><i class="el-icon-arrow-left"></i>back</div>
        <h3>{{archive.title}}</h3>
        <p>创建时间:<span>{{archive.createtime}}</span></p>
        <div class="hr"></div>
        <div class="content" v-html="archive.content"></div>
    </div>
</template>
<script>
import qs from "qs";

export default {
  data() {
    return {
      archive: {},
      content: "import sb from 'sb.js';",
      loading: true
    };
  },
  methods: {
    getDate(time) {
      var dt = new Date(time);
      var year = dt.getFullYear();
      var month = dt.getMonth() + 1;
      var date = dt.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      return `${year}-${month}-${date}`;
    },
    routerback: function() {
      this.$router.back(-1);
    }
  },
  mounted() {
    var contentId = parseInt(this.$route.params.contentId);
    this.$axios({
      method: "post",
      url: "http://120.78.235.137/JunBlog-php/archiveDetail.php",
      data: qs.stringify({
        contentId: contentId
      })
    })
      .then(res => {
        console.log(this);
        var createtime = this.getDate(res.data.createtime);
        res.data.createtime = createtime;
        this.archive = res.data;
        this.loading = false;
      })
      .catch(response => {
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
.back {
  color: #707070;
  padding-bottom: 20px;
}
.archive-detail {
  padding: 0 10px;
  > h3 {
    padding-bottom: 10px;
  }
  > p {
    padding-bottom: 20px;
    color: #888888;
    span {
      padding-left: 10px;
    }
  }
  .hr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .content {
    margin: 20px;
    overflow: auto;
  }
}

</style>
