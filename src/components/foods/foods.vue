<template>
    <div>
        <div class="row" v-for="(img,index) in images" :key="index">
            <div class="col-xs-12 col-md-6">
                <a :href="img.img" class="thumbnail">
                <img :src="img.img" alt="image">
                </a>
            </div>
            <div class="col-xs-12 col-md-6 img-text">
                <p>{{img.text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            images:[{
                img:'https://wx2.sinaimg.cn/mw1024/7ae2aa57ly1ffmgfs7zxbj20fo0aemy2.jpg',
                text:'From lodon'
            },{
                img:'https://wx3.sinaimg.cn/mw1024/7ae2aa57ly1ffmgfu3zulj20fo0agaaz.jpg',
                text:'hair cut'
            }]
        }
    }
}
</script>
<style lang="less" scoped>
.row{
    overflow: hidden;
}
@media screen and (min-width: 768px){
    .img-text{
        border-top:solid 1px #d9d9d9; 
        padding-top: 10px;
    }
}

@media screen and (max-width: 768px){
    .img-text{
        border-bottom:solid 1px #d9d9d9; 
        margin-bottom: 10px;
    }
}

</style>
