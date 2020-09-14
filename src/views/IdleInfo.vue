<template>
  <div>
    <van-swipe :autoplay="8000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" @click="Preview_img(images,index)" />
      </van-swipe-item>
    </van-swipe>
    <div >
      <div >
        <h2>{{ this.goodsData.name }}</h2>
        <p>{{ this.goodsData.seller }}</p>
        <span >￥{{ this.goodsData.price }}</span>
      </div>
      <div class="line">
        <h3>闲置物品介绍</h3>
      </div>
      <div>
        <p>{{ this.goodsData.describe }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant"; //引入预览
export default {
  name: "HelloWorld",
  data() {
    return {
      goodsData: {
        name: "手机",
        seller: "卖家：吴大哥",
        price: "99",
        describe:
          "描述是垃圾劳动纠纷卡卡发肯德基爱上了动静分离教案设计两地分居垃圾路上的风景垃圾死了的房间里安捷伦的房间里就安乐死立法的接口就描述是垃圾劳动纠纷卡卡发肯德基爱上了动静分离教案设计两地分居垃圾路上的风景垃圾死了的房间里安捷伦的房间里就安乐死立法的接口就",
      },
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
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
</style>
