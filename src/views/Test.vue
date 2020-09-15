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
    <van-list class="card" v-model="listLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-card
      v-for="item in goodsData"
      :key="item"
      :price="item.price"
      :desc="item.detail"
      :title="item.title"
      :thumb="item.image"
    ></van-card>
    </van-list>
    <van-submit-bar :loading="isSubLoading"
            :price="total"
            button-text="结算"
            @submit="onSubmit"></van-submit-bar>
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
      goodsData: [],
      id: undefined,
      isSubLoading: false, // 提交订单loading
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
      this.goodsData=[];
      let res = await IdleApi.getIdleInfo(this.id);
      let goods = res.data;
      var strs = new Array();
      strs = goods.image.split(",");
      goods.image = [];
      goods.image.push(strs[0]);
      this.goodsData.push(goods);
    },
    
  },
  computed: {
        // 总价
        total() {
          console.log("Order total:" + this.goodsData.price*100);
            return this.goodsData.price*100;
        }
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