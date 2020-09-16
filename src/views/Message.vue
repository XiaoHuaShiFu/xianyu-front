
<template>
  <div style="background-color:#ebebeb; height:100%">
    <Tabbar :active="active"></Tabbar>
    <van-nav-bar style="background-color:#5692CC;">
      <template #title>
        <div style="color:#fff;font-size:20px;font-weight:bold;">消息中心</div>
      </template>
    </van-nav-bar>
    <van-list v-model="loading" :finished="finished" @load="onLoad1">
      <van-cell style="margin-bottom:10px;" v-for="item in list" :key="item.id">
        <van-row style="height:50px;">
          <van-col span="3">
            <van-row 
              style="padding-top:15px;"
            >
              <van-icon color="#ccc" size=35 :name="item.icon" />
            </van-row>
          </van-col>
          <van-col offset="0.5" span="15">
            <van-row
              style="padding-top:10px;text-align:left;line-height:20px;color:#666; font-size:17px;"
            >{{item.title}}</van-row>
            <van-row
              style="padding-top:10px;text-align:left;line-height:15px;color:#999; font-size:14px;"
            >{{item.content}}</van-row>
          </van-col>
          <van-col offset="1" span="5">
            <van-row
              style="padding-top:20px;text-align:left;line-height:20px;color:#aaa; font-size:13px;"
            >{{item.noticeTime}}</van-row>
          </van-col>
        </van-row>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import UserApi from "./../service/UserApi";
import adaptString from "./../utils/StringUtils";
import changeTime from "./../utils/DateUtils";
export default {
  data() {
    return {
      active: "message",
      user: {},
      list: [],
      loading: false,
      finished: false,
      pageNum: 0,
      pageSize: 3,
      totalNormal: 0,
    };
  },
  components: {
    Tabbar
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
  },
  methods: {
    /**
     * 加载下一页
     */
    async onLoad1() {
      this.loading = true;
      let res = await await this.$Http.listNotices(
        {
          pageNum: this.pageNum + 1,
          pageSize: this.pageSize,
          userId: this.user.id,
        },
        false
      );
      this.totalNormal = res.data.total;
      let list0 = res.data.list;
      console.log(list0);
      if (list0.length > 0) {
        for (let i = 0; i < list0.length; i++) {
          list0[i].content = adaptString(list0[i].content, 25);
          list0[i].noticeTime = changeTime(list0[i].noticeTime);
          if (list0[i].type == "IDLE_SELL") {
            list0[i].icon = "after-sale";
          } else if (list0[i].type == "IDLE_BUY") {
            list0[i].icon = "cash-back-record";
          } if (list0[i].type == "NOTICE") {
            list0[i].icon = "volume-o";
          }
          this.list.push(list0[i]);
        }
        this.pageNum++;
      } else {
        this.finished = true;
      }

      // 加载状态结束
      this.loading = false;
    },
  },
};
</script>