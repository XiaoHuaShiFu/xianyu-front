<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <Tab :id=id></Tab>
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
      id:undefined,
    };
  },
  components: {
    Top,
    Tab,
  },
  created() {
    this.id = this.$route.query.id;
    console.log("created"+this.id);
    this.onGetIdleInfo();
  },
  methods:{
    onClickBuy(){
      this.$router.push("/order");
    }
  }
};
</script>
<style scoped>
</style>>