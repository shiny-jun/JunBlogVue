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
        <el-row :gutter="10"  class="content">
          <el-col :xs="24" :sm="12">
            <div class="my-info">
                <h4>个人信息</h4>
                <div><span>Age:</span>{{info.age}}</div>
                <div><span>Email:</span>{{info.email}}</div>
                <div><span>University:</span>{{info.university}}</div>
                <div><span>Major:</span>{{info.major}}</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="my-skill">
                <h4>个人技能</h4>
                <div class="skill" v-for="(skill,skillIndex) in skills" :key="skillIndex">
                    <span class="name">{{skill.name}}</span>
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="skill.percent" color="#e0bd62"></el-progress>
                    <span class="dsc">{{skill.describe}}</span>
                </div>
            </div>
          </el-col>
        </el-row>    
    </div>
</template>
<script>
import contact from "../comment/contact";

export default {
  data() {
    return {
      info: {},
      skills: []
    };
  },
  components: {
    contact
  },
  mounted() {
    
    var _this = this;
    this.$axios
      .get("http://120.78.235.137/JunBlog-php/myInfo.php")
      .then(function(response) {
        console.log(response.data);
        _this.info = response.data;
      })
      .catch(function(response) {
        console.log(response);
      });
    this.$axios
      .get("http://120.78.235.137/JunBlog-php/mySkill.php")
      .then(function(response) {
        console.log(response.data);
        _this.skills = response.data;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};
</script>
<style lang="less" scoped>
@choose-color: #e0bd62;
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
        background-image: url(http://120.78.235.137/images/avatar.jpg);
        background-size: 100%;
      }
    }
    .chinese-name {
      padding-bottom: 20px;
      .username {
        color: @choose-color;
      }
    }
    .intro {
      padding-bottom: 10px;
    }
  }
  .content {
    .my-info {
      padding: 10px 20px;
      * {
        text-align: left;
        padding-bottom: 10px;
      }
      h4 {
        text-align: center;
        padding-bottom: 20px;
      }
      span {
        color: #707070;
        padding-right: 10px;
      }
    }
    .my-skill {
      padding: 10px 20px;
      * {
        text-align: left;
        padding-bottom: 10px;
      }
      h4 {
        text-align: center;
        padding-bottom: 20px;
      }
      .skill {
        .name {
          padding-right: 10px;
          &::after {
            content: ":";
          }
        }
        .el-progress {
          width: 200px;
          display: inline-block;
        }
        @media screen and(max-width: 447px) {
          .el-progress {
            width: 130px;
          }
        }
        .dsc {
          color: #707070;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
