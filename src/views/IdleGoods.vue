<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <Tab :id=id></Tab>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" @click="onClickComment" />
      <van-goods-action-button type="danger" text="购买" @click="onClickBuy" />
    </van-goods-action>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import Tab from "@/components/Tab.vue";
import { Notify } from 'vant';
export default {
  data() {
    return {
      postTitle: "闲置信息",
      isActive: true,
      titleActive: "",
      id:undefined,
      userId:undefined,
      detail:"",
    };
  },
  components: {
    Top,
    Tab,
  },
  created() {
    this.id = this.$route.query.id;
    this.userId=this.$route.query.userId;
    console.log("created"+this.id);
    this.onGetIdleInfo();
  },
  methods:{
    onClickBuy(){
      console.log("onClickBuy"+this.id+" "+this.userId);
      if (sessionStorage.getItem("token") == null) {
        this.$router.push({ path: "/login",query:{toPage:"/home"}});
      } 
      else if(this.userId==sessionStorage.getItem("id")){
        Notify({ type: "warning", message: "不能自己买自己的商品" });
      }
      else {
        this.$router.push({path:'/order',query:{id:this.id}})
      }
    },
    onClickComment(){
      console.log("onClickComment"+this.id+" "+sessionStorage.getItem("id"));

    }
  }
};
</script>
<style scoped>
</style>