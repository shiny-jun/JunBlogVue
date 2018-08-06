<template>
    <div>
        <el-row :gutter="40">
        <el-col :xs="24" :sm="12" v-for="(img,index) in images" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="img.img" class="image">
            <div style="padding: 14px;">
                <span>{{img.text}}</span>
                <div class="bottom clearfix">
                <!-- <time class="time">{{ currentDate }}</time> -->
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          img:
            "https://wx2.sinaimg.cn/mw1024/7ae2aa57ly1ffmgfs7zxbj20fo0aemy2.jpg",
          text: "From lodon"
        },
        {
          img:
            "https://wx3.sinaimg.cn/mw1024/7ae2aa57ly1ffmgfu3zulj20fo0agaaz.jpg",
          text: "hair cut"
        }
      ]
    };
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
