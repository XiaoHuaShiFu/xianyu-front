<template>
  <div class="goods">
    <van-swipe :autoplay="8000" indicator-color="white">
      <van-swipe-item v-for="item in picturelist" :key="item">
        <img :src="setImg(item.imgSrc)"/>
      </van-swipe-item>
    </van-swipe>
    <div class="goods-details">
      <div class="goods-trait">
        <h2>{{ this.goodsData.name }}</h2>
        <p>{{ this.goodsData.specifications }}</p>
        <span>￥{{ this.goodsData.currentPrice }}</span>
      </div>
      <div class="goods-info">
        <h3>闲置物品介绍</h3>
        <p>{{ this.goodsData.specifications }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picturelist: [
        {
          imgSrc: require("../static/01.jpg"),
        },
        {
          imgSrc: require("../static/02.jpg"),
        },
        {
          imgSrc: require("../static/03.jpg"),
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>
<style scoped>
.goods {
  width: 100%;
  height: 100%;
  padding: 0.42rem 0 0.45rem;
  overflow: auto;
}
.goods .van-swipe {
  width: 100%;
  height: 3.5rem;
}
.van-swipe .van-swipe-item .img {
  width: 100%;
  height: 100%;
}
.goods .goods-details {
  width: 100%;
  padding-bottom: 0.2rem;
  background-color: #fff;
}
.goods-details .goods-trait {
  width: 100%;
  padding: 0.15rem;
}
.goods-trait .h2 {
  font-size: 0.22rem;
}
.goods-trait .p {
  font-size: 0.14rem;
  color: #333;
  margin-top: 0.1rem;
  line-height: 0.22rem;
}
.goods-trait .span {
  display: inline-block;

  font-size: 0.22rem;
  color: #ff6700;
  margin-top: 0.1rem;
}
.goods-details .goods-info {
  width: 100%;
  padding: 0 0.15rem;
  margin-top: 0.1rem;
}
</style>