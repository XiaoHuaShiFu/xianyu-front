<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <!--地址-->
    <div class="jie_diz" @submit="onSubmit">
      <p>{{addresses.name}} {{addresses.phone}}</p>
      <p class="p">
        {{addresses.address}}
        <i></i>
      </p>
    </div>
    <div class="caix"></div>
    <van-card
      class="card"
      :price="goodsData.price"
      :desc="goodsData.detail"
      :title="goodsData.title"
      :thumb="goodsData.image"
    ></van-card>
    <van-submit-bar :price="total" button-text="结算" @submit="onSubmit"></van-submit-bar>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import IdleApi from "../service/IdleApi";
export default {
  data() {
    return {
      postTitle: "订单信息",
      isActive: true,
      addresses: {
        name: "吴大哥",
        phone: "182*****710",
        address: "贵州贵阳市云岩区城区下合群路达亨大厦1606 ",
      },
      goodsData: {
        price: 3121,
        title: "sakfjd",
        detail: "sfasfsdf",
        image: require("../static/01.jpg"),
      },
      id: undefined,
    };
  },
  components: {
    Top,
  },
  created() {
    this.id = this.$route.query.id;
    console.log("Order create:" + this.id);
    if (this.id != undefined) {
      this.onGetIdleInfo();
    }
  },
  methods: {
    /*
    获取商品信息
     */
    async onGetIdleInfo() {
      let res = await IdleApi.getIdleInfo(this.id);
      console.log(res);
      this.goodsData = res.data;
      var strs = new Array();
      strs = this.goodsData.image.split(",");
      this.goodsData.image = strs[0];
      console.log(this.goodsData);
    },

    onSubmit() {
      console.log("dd");
      this.$router.push("/order/orderResult");
    },
  },
  computed: {
    // 总价
    total() {
      console.log("Order total:" + this.goodsData.price * 100);
      return this.goodsData.price * 100;
    },
  },
};
</script>
<style scoped>
.jie_diz {
  margin: 0.9rem 0.5rem;
}
.jie_diz p {
  color: #535353;
  font-size: 0.9rem;
  text-align: left;
}
.caix {
  background: url("../static/cait.jpg") no-repeat;
  background-size: 100%;
  height: 0.06rem;
  border-bottom: solid 0.1rem #e9e9e9;
}
.jie_diz p.p i {
  display: inline-block;
  width: 0.7rem;
  height: 1.1rem;
  background: url("../static/rightGo.png") center;
  background-size: 100%;
  background-repeat: no-repeat;
  float: right;
}
.jies_qian {
  border-bottom: solid 0.1rem #e9e9e9;
  padding: 0.2rem;
}
.jies_qian .shangpjis {
  overflow: hidden;
  font-size: 0.22rem;
  color: #626262;
  padding: 0.15rem 0;
}
.jies_qian .shangpjis h1 {
  float: left;
}
.jies_qian .shangpjis p {
  float: right;
}
.card {
  text-align: right;
  border-bottom: solid 0.1rem #e9e9e9;
}
</style>