<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <Tab></Tab>
    <!-- 底部tab -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" @click="onClickComment" />
      <van-goods-action-button type="warning" text="收藏" @click="onClickCollection" />
      <van-goods-action-button type="danger" text="购买" @click="onClickBuy" />
    </van-goods-action>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import Tab from "@/components/Tab.vue";
export default {
  data() {
    return {
      postTitle: "闲置信息",
      isActive: true,
      titleActive: "",
    };
  },
  components: {
    Top,
    Tab,
  },
  created() {
    console.log("idle page");
  },
  methods: {
    /*
    发布闲置
     */
    async onPublish() {
      //let userId = sessionStorage.getItem("id");
      //let res = await UserApi.updateUserAvatar(userId, file.file);
      //this.user = res.data;
    },
  },
};
</script>
<style scoped>
</style>>