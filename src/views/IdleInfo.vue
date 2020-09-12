<template>
  <div>
    <van-swipe :autoplay="8000" indicator-color="white">
      <van-swipe-item v-for="item in picturelist" :key="item">
        <img :src="setImg(item.imgSrc)" alt="商品" />
      </van-swipe-item>
    </van-swipe>
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