<template>
    <div>
      <el-carousel height="180px" indicator-position="outside">
        <el-carousel-item v-for="(carousel,index) in carousels" :key="index" style="letter-spacing:-800px;">
          <a :href="carousel.normal" target="view_window">
            <img class="carousel-img" src="" v-lazy="carousel.min"/>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>
export default {
  data() {
    return {
      carousels: [
        {
          min: "http://120.78.235.137/images/carousel/carousel1_min.jpg",
          normal: "http://120.78.235.137/images/carousel/carousel1.jpg"
        },
        {
          min: "http://120.78.235.137/images/carousel/carousel2_min.jpg",
          normal: "http://120.78.235.137/images/carousel/carousel2.jpg"
        },
        {
          min: "http://120.78.235.137/images/carousel/carousel3_min.jpg",
          normal: "http://120.78.235.137/images/carousel/carousel3.jpg"
        },
        {
          min: "http://120.78.235.137/images/carousel/carousel4_min.jpg",
          normal: "http://120.78.235.137/images/carousel/carousel4.jpg"
        },
        {
          min: "http://120.78.235.137/images/carousel/carousel5_min.jpg",
          normal: "http://120.78.235.137/images/carousel/carousel5.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-img {
  width: 100%;
}
</style>
