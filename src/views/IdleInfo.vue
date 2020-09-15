<template>
  <div>
    <van-swipe :autoplay="8000">
      <van-swipe-item v-for="(image, index) in goodsData.image" :key="index">
        <img :src="image" @click="Preview_img(goodsData.image,index)" />
      </van-swipe-item>
    </van-swipe>
    <div >
      <div >
        <h2>{{ this.goodsData.title }}</h2>
        <!--<p>{{ this.goodsData.userId }}</p>-->
        <span class="red">{{ this.goodsData.price }}元</span>
      </div>
      <div class="line">
        <h3>闲置物品介绍</h3>
      </div>
      <div>
        <p>{{ this.goodsData.detail }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant"; //引入预览
import IdleApi from "../service/IdleApi";
export default {
  name: "HelloWorld",
  props: ["id"],
  data() {
    return {
      goodsData: {},
    };
  },
  created(){
    this.onGetIdleInfo();
  },
  methods: {
    // 轮播图预览
    Preview_img(images, index) {
      ImagePreview({
        images: images, //图片数组
        showIndex: true,
        loop: false,
        startPosition: index,
      });
    },
    /*
    获取商品信息
     */
    async onGetIdleInfo() {
      console.log("onGetIdleInfo:"+this.id);
      let res = await IdleApi.getIdleInfo(this.id);
      this.goodsData=res.data;
      var strs = new Array();
      strs = this.goodsData.image.split(",");
      this.goodsData.image=[];
      for (var i in strs){
        this.goodsData.image.push(strs[i]);
      }
    },
  },
};
</script>
<style scoped lang='less'>
.van-swipe {
  width: 100%;
  height: 15rem;
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.line {
  margin: 20px 0;
  line-height: 1px;
  border-left: 100px solid #ddd;
  border-right: 100px solid #ddd;
  text-align: center;
}
.red{
  color:#ff6700;
  font-size: 21px;
}
</style>
