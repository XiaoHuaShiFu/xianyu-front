<template>
  <div>
    <van-nav-bar style="background:#669FD1;" @click-left="onClickLeft" :border="false">
      <template #left>
        <van-icon color="#fff" size="18" name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-col span="24" style="background:#f6f6f6; z-index:-1">
      <van-row style="background:#669FD1; ">
        <van-col offset="2" span="5" style="height:50px">
          <van-image
            style="top:10px;"
            round
            height="80"
            width="80"
            fit="cover"
            :src="user.avatarUrl"
          />
        </van-col>
      </van-row>
      <van-row style="border-bottom:1px solid #eee; background:#fff;">
        <van-col span="24">
          <van-row>
            <van-col span="8"></van-col>
            <van-col
              span="14"
              style="text-align:left;line-height:40px;color:#aaa; font-size:14px;"
            >{{user.nickName}}</van-col>
          </van-row>
          <van-row>
            <van-col span="12">
              <van-row style="color:#ccc; "></van-row>
              <van-row style="color:#669FD1;line-height:30px; font-size:17px;"></van-row>
            </van-col>
            <van-col span="12">
              <van-row style="color:#ccc; "></van-row>
              <van-row style="color:#669FD1;line-height:30px; font-size:17px;"></van-row>
            </van-col>
          </van-row>
          <van-row style="height:15px"></van-row>
        </van-col>
      </van-row>
      <van-row
        style="background:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee; height:40px; margin-top:10px; line-height:40px; color:#669FD1;"
      >卖在闲鱼 {{totalNormal}}</van-row>

      <van-row>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad1">
          <van-cell style="margin-top:10px;" v-for="item in list" :key="item.id">
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
                  <van-row style="padding-top:10px;text-align:left;line-height:20px;color:#666; font-size:14px;">
                      {{item.title}}
                  </van-row>
                  <van-row style="padding-top:10px;text-align:left;line-height:15px;color:#999; font-size:13px;">
                      描述：{{item.detail}}
                  </van-row>
                  <van-row style="padding-top:10px;text-align:left;line-height:20px;color:red; font-size:14px;">
                      ￥{{item.price}}
                  </van-row>
              </van-col>
            </van-row>
          </van-cell>
        </van-list>
      </van-row>
    </van-col>
  </div>
</template>

<script>
import UserApi from "./../service/UserApi";
import IdleApi from "./../service/IdleApi";
import parseImageString from "./../utils/ParseImage";
import adaptString from "./../utils/StringUtils";
export default {
  data() {
    return {
      user: {},
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
    this.user = await UserApi.getUserAndSaveInSessionStorage(
      this.$route.query.userId
    );
  },
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.go(-1);
    },
    /**
     * 加载下一页
     */
    async onLoad1() {
      this.loading = true;
      let res = await IdleApi.listIdles({
        pageNum: this.pageNum + 1,
        pageSize: this.pageSize,
        userId: this.user.id,
        status: "NORMAL",
      });
      this.totalNormal = res.data.total;
      let list0 = res.data.list;
      console.log(list0);
      if (list0.length > 0) {
        for (let i = 0; i < list0.length; i++) {
          list0[i].image = parseImageString(list0[i].image);
          list0[i].title = adaptString(list0[i].title, 16);
          list0[i].detail = adaptString(list0[i].detail, 15);
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
