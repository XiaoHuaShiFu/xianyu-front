<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" :border="false" left-arrow>
      <template #title>
        <div style="color:#666;font-size:20px;font-weight:bold;">买在贤鱼</div>
      </template>
    </van-nav-bar>
    <van-col span="24" style="background:#f6f6f6; z-index:-1">
      <van-row>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
          <van-cell style="margin-top:10px;" v-for="item in list" :key="item.id">
            <van-row
              style="border-bottom:1px solid #eee; border-top:1px solid #eee; background:#fff;line-height:30px;font-size:15px"
            >
              <van-col span="19">订单编号：{{item.id}}</van-col>
              <van-col span="5" style="color:red">{{item.statu}}</van-col>
            </van-row>
            <van-row style="height:90px">
              <van-col offset="0.5" span="5.5">
                <van-image
                  style="margin-top:5px;"
                  height="80"
                  width="80"
                  fit="cover"
                  :src="item.image[0]"
                />
              </van-col>
              <van-col offset="1" span="17">
                <van-row
                  style="padding-top:10px;text-align:left;line-height:20px;color:#666; font-size:14px;"
                >{{item.title}}</van-row>
                <van-row
                  style="padding-top:10px;text-align:left;line-height:15px;color:#999; font-size:13px;"
                >卖家：{{item.seller.nickName}}</van-row>
                <van-row
                  style="padding-top:10px;text-align:left;line-height:20px;color:red; font-size:14px;"
                >￥{{item.totalPrice}}</van-row>
              </van-col>
            </van-row>

            <van-row
              style="border-bottom:1px solid #eee; border-top:1px solid #eee; background:#fff;line-height:40px;font-size:15px"
            >
              <van-col span="19">应付金额：{{item.actualPay}}</van-col>
              <van-col span="5" style="color:red" v-if="item.isReceive">
                <van-button size="small" plain type="info" @click="onPutStatu(item)">确认收货</van-button>
              </van-col>
            </van-row>
          </van-cell>
        </van-list>
      </van-row>
    </van-col>
  </div>
</template>

<script>
import parseImageString from "./../utils/ParseImage";
import adaptString from "./../utils/StringUtils";
import { Notify } from "vant";
export default {
  data() {
    return {
      userId: 0,
      list: [],
      loading: false,
      finished: false,
      pageNum: 0,
      pageSize: 3,
      totalNormal: 0,
    };
  },
  components: {},
  async created() {
    this.userId = sessionStorage.getItem("id");
    this.loading = true;
    let res = await this.$Http.getBuyerOrder({}, false, {}, "/" + this.userId);
    let list0 = res.data.data;
    console.log(res.data.data);
    if (list0.length > 0) {
      for (let i = 0; i < list0.length; i++) {
        list0[i].image = parseImageString(list0[i].idle.image);
        list0[i].title = adaptString(list0[i].idle.title, 16);
        list0[i].isReceive = false;
        if (list0[i].status.status2 == "未付款") {
          list0[i].statu = "等待付款";
        } else if (list0[i].status.status3 == "待发售") {
          list0[i].statu = "等待发货";
        } else if (list0[i].status.status4 == "待交易") {
          list0[i].statu = "等待完成";
          list0[i].isReceive = true;
        }
        else{
          list0[i].statu = "已经完成";
        }
        this.list.push(list0[i]);
      }
      this.pageNum++;
    }
    console.log(list0);
    this.finished = true;
    this.loading = false;
  },
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.go(-1);
    },
    async onPutStatu(item) {
      console.log("onPutStatu:" + item.id);
      let putOrderJson = {
        id: item.id,
        status: {
          status1: "已拍下",
          status2: "已付款",
          status3: "已发售",
          status4: "已交易",
        },
      };
      let res = await this.$Http.putOrder(putOrderJson);
      console.log(res);
      if(res.status== 200){
        item.isDeliver = false;
        Notify({ type: "success", message: "完成交易" });
      }
    },
  },
};
</script>
