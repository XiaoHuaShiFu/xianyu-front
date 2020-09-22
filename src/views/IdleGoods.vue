<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <Tab :id="id"></Tab>
    <van-dialog v-model="show" title="留言框" show-cancel-button :beforeClose="chargeBtn">
      <!--输入框-->
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
      />
    </van-dialog>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="留言" @click="onClickComment" />
      <van-goods-action-button type="danger" text="购买" @click="onClickBuy" />
    </van-goods-action>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import Tab from "@/components/Tab.vue";
import { Notify } from "vant";
export default {
  data() {
    return {
      postTitle: "闲置信息",
      isActive: true,
      titleActive: "",
      id: undefined,
      userId: undefined,
      message: "",
      show:false
    };
  },
  components: {
    Top,
    Tab,
  },
  created() {
    this.id = this.$route.query.id;
    this.userId = this.$route.query.userId;
    console.log("created" + this.id);
    this.onGetIdleInfo();
  },
  methods: {
    onClickBuy() {
      console.log("onClickBuy" + this.id + " " + this.userId);
      if (sessionStorage.getItem("token") == null) {
        this.$router.push({ path: "/login", query: { toPage: "/home" } });
      } else if (this.userId == sessionStorage.getItem("id")) {
        Notify({ type: "warning", message: "不能自己买自己的商品" });
      } else {
        this.$router.push({ path: "/order", query: { id: this.id } });
      }
    },
    onClickComment() {
      if (sessionStorage.getItem("token") == null) {
        this.$router.push({ path: "/login", query: { toPage: "/home" } });
      }
      this.show = true
    },
    chargeBtn(action, done) {//确认or取消
      if (action === 'cancel') {//取消按钮
        done();
      } else if (action === 'confirm') {//确定按钮
          //向后端传值并关闭dialog弹出框
          this.onPostComments();
            this.show = false;
          }
        this.message='';
        done();
    },
    async onPostComments(){
      let res=await this.$Http.postComments({
        userId:sessionStorage.getItem("id"),
        idleId:this.id,
        content:this.message
      });
      if(res.status== 201){
        Notify({ type: "success", message: "留言成功" });
      }
      console.log(res);
    }
  },
};
</script>
<style scoped>
</style>