<template>
  <div>
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <div class="zfjieguo">
      <div class="zfinfo">
        恭喜您，购买成功！
        <br />请等待我们将尽快为你完成订单
      </div>
      <div
        style="width: 80%; margin: 0 auto; line-height: 23px; text-align: center; margin-bottom: 20px; font-size: 14px;"
      >
        订单编号：{{id}}
        <br />消费金额：{{actualPay}}元
        <br />支付方式：支付宝支付
      </div>

      <p style="text-align: center; margin-bottom: 10px;">
        <button class="tip-btn" @click="OnBuy">继续购买</button>
      </p>
    </div>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import Tabbar from "@/components/Tabbar.vue";
export default {
  data() {
    return {
      postTitle: "订单结果",
      isActive: false,
      id:undefined,
      actualPay:undefined,
    };
  },
  components: {
    Top,
    Tabbar,
  },
  created() {
    this.id = this.$route.query.id;
    this.actualPay=this.$route.query.actualPay;
    console.log("OrderResult"+this.id+" "+this.actualPay);
  },
  methods: {
    OnBuy(){
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.zfjieguo {
    border-bottom: 1px #CCCCCC solid;
    background-color: #FFFFFF;
    color: #666666;
}
.zfinfo {
    text-align: center;
    font-size: 14px;
    padding: 30px 0;
}
.tip-btn {
    display: inline;
    width: 35%;
    margin: 8px 20px;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
}
</style>