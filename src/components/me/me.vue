<template>
    <div class="me">
        <div class="head">
            <h3>个人简介</h3>
            <div class="avatar">
                <div class="avatar-img"></div>
            </div>
            <div class="chinese-name">{{info.chineseName}}<div class="username">({{info.username}})</div></div>
            <div class="intro" v-html="info.introduction"></div>
            <contact/>
        </div>
        <div class="content">
            <div class="my-info">
                <h4>个人信息</h4>
                <div>Age:{{info.age}}</div>
                <div>Email:{{info.email}}</div>
                <div>University:{{info.university}}</div>
                <div>Major:{{info.major}}</div>
            </div>
            <div class="my-skill">
                <h4>个人技能</h4>
                <div class="skill" v-for="skill">
                    <span>{{skill.name}}</span>
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="skill.percent" color="rgba(142, 113, 199, 0.7)"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import contact from '../comment/contact'

export default {
  data() {
    return {
      info: {}
    };
  },
  components:{
      contact
  },
  mounted() {
    var _this = this;
    this.$ajax
      .get("http://120.78.235.137/myInfo.php")
      .then(function(response) {
        console.log(response.data);
        _this.info = response.data;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};
</script>
<style lang="less" scoped>
@choose-color: #d5a52a;
* {
  text-align: center;
}
.me {
  .head {
      padding-bottom: 20px;
    h3 {
      color: #808080;
      padding-bottom: 20px;
    }
    .avatar {
      margin: auto;
      width: 100px;
      padding-bottom: 20px;
      .avatar-img {
        width: 100%;
        padding-bottom: 100%;
        border-radius: 50px;
        overflow: hidden;
        background-image: url(http://wx3.sinaimg.cn/mw690/6d659ba0ly8fdqq6w68v9j20ro0ro778.jpg);
        background-size: 100%;
      }
    }
    .chinese-name {
      padding-bottom: 20px;
      .username {
        color: @choose-color;
      }
    }
    .intro{
        padding-bottom: 10px;
    }
  }
  .content {
    display: flex;
    .my-info {
      flex: 1;
      padding: 10px 20px;
      * {
        text-align: left;
        padding-bottom: 10px;
      }
      h4{
        text-align: center;
        padding-bottom: 20px;
      }
    }
    .my-skill {
      flex: 1;
      padding: 10px 20px;
      * {
        text-align: left;
        padding-bottom: 10px;
      }
      h4{
        text-align: center;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
