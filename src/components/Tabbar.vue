<template>

    <van-tabbar v-model="active0" @change="onChange">
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="idle" icon="add-o">发布闲置</van-tabbar-item>
      <van-tabbar-item name="message" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item name="my" icon="https://b.yzcdn.cn/vant/icon-demo-1126.png">我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      active0: this.active,
    };
  },
  methods: {
    onChange(index) {
      if (sessionStorage.getItem("token") == null) {
        this.$router.push({ path: "/login?toPage=/" + index });
      } else {
        this.$router.push("/" + index);
      }
    },
  },
};
</script>