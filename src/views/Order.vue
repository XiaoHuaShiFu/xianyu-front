<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <!--地址-->
    <div class="jie_diz" @click="onAddress">
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
    <div class="jies_qian">
      <div class="shangpjis">
        <h1>商品总计</h1>
        <p>
          <span>¥{{goodsData.price}}</span>
        </p>
      </div>
      <div class="shangpjis">
        <h1>运费</h1>
        <p>
          <span>¥{{this.goodsData.postage}}</span>
        </p>
      </div>
    </div>
    <van-submit-bar :price="total" button-text="结算" @submit="onSubmit"></van-submit-bar>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
import IdleApi from "../service/IdleApi";
import AddressApi from "./../service/AddressApi";
import adaptString from "./../utils/StringUtils";
import UserApi from "./../service/UserApi";
import { Notify } from "vant";
export default {
  data() {
    return {
      postTitle: "订单信息",
      isActive: true,
      isAddress: false,
      addresses: {
        name: "无姓名",
        phone: "0000000000",
        address: "某某省某某市某某区某某路某某小区666号 ",
        id: 0,
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
    if (localStorage.getItem("addressId") != "") {
      console.log(
        "localStorage.getItem:" + localStorage.getItem("addressName")
      );
      this.addresses.id = localStorage.getItem("addressId");
      this.addresses.name = localStorage.getItem("addressName");
      this.addresses.phone = localStorage.getItem("addressPhone");
      this.addresses.address = localStorage.getItem("addressAddress");
    } else {
      this.onGetAddress();
    }
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
    /*
    获取默认地址
     */
    async onGetAddress() {
      let res = await AddressApi.listAddresses({
        pageNum: 1,
        pageSize: 1,
        userId: sessionStorage.getItem("id"),
      });
      console.log(res)
      let list0 = res.data.list;
      if (list0.length > 0) {
        this.isAddress = true;
        for (let i = 0; i < 1; i++) {
          this.addresses.name = list0[i].fullName;
          this.addresses.phone = list0[i].phone;
          this.addresses.address = adaptString(list0[i].address, 30);
          this.addresses.id = list0[i].id;
        }
      }
    },
    /*
    选择地址
     */
    onAddress() {
      this.$router.push("/user/address");
    },
    async onSubmit() {
      var res = await UserApi.getUserAndSaveInSessionStorage(
        sessionStorage.getItem("id")
      );
      if (res.aliPayAccount == null) {
        Notify({ type: "warning", message: "个人信息支付宝未完善" });
        return;
      }
      let address = await AddressApi.listAddresses({
        pageNum: 1,
        pageSize: 1,
        userId: sessionStorage.getItem("id"),
      });
      res = await this.$Http.postOrder(
        {
          sellerId: this.goodsData.userId,
          buyerId: sessionStorage.getItem("id"),
          idleId: this.goodsData.id,
          freight: this.goodsData.postage,
          actualPay: this.goodsData.price + this.goodsData.postage,
          totalPrice: this.goodsData.price,
          aliPayNumber: res.aliPayAccount,
          addressId: address.data.list[0].id,
        },
      );
      console.log(res);
      if (res.status == 201) {
        Notify({ type: "success", message: "购买成功" });
        this.$router.push({path:'/order/orderResult',query:{actualPay:res.data.data.actualPay,id:res.data.data.id}});
      } else {
        Notify({ type: "warning", message: "购买失败" });
      }
    },
  },
  computed: {
    // 总价
    total() {
      console.log(
        "Order total:" + (this.goodsData.price + this.goodsData.postage) * 100
      );
      return (this.goodsData.price + this.goodsData.postage) * 100;
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