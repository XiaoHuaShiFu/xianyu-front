<template>
  <div>
    <van-nav-bar left-text="返回" :border="false" left-arrow @click-left="onClickLeft" />
    <van-col span="24">
      <van-row style="border-bottom:1px solid #eee;" />
      <van-row style="border-bottom:1px solid #ccc; height:50px;">
        <van-col offset="1" span="5">
          <div style="text-align:left; line-height:50px;color:#999;">用户名</div>
        </van-col>
        <van-col offset="1" span="17">
          <div style="text-align:left;line-height:50px;">{{user.username}}</div>
        </van-col>
      </van-row>
      <van-row style="border-bottom:1px solid #ccc; height:50px;">
        <van-col offset="1" span="5">
          <div style="text-align:left; line-height:50px;color:#999;">昵称</div>
        </van-col>
        <van-col offset="1" span="14">
          <div style="text-align:left;line-height:50px;">{{user.nickName}}</div>
        </van-col>
        <van-col
          offset="1"
          span="2"
          style="height:50px;display: flex;flex-direction: row;align-items: center;" @click="onModify('昵称')"
        >
          <van-icon name="arrow" />
        </van-col>
      </van-row>
      <van-row style="border-bottom:1px solid #ccc; height:50px;">
        <van-col offset="1" span="5">
          <div style="text-align:left; line-height:50px;color:#999;">密码</div>
        </van-col>
        <van-col offset="1" span="14">
          <div style="text-align:left;line-height:50px;">******</div>
        </van-col>
        <van-col
          offset="1"
          span="2"
          style="height:50px;display: flex;flex-direction: row;align-items: center;" @click="onModify('密码')"
        >
          <van-icon name="arrow" />
        </van-col>
      </van-row>
      <van-row style="border-bottom:1px solid #ccc; height:50px;">
        <van-col offset="1" span="5">
          <div style="text-align:left; line-height:50px;color:#999;">支付宝</div>
        </van-col>
        <van-col offset="1" span="14">
          <div style="text-align:left;line-height:50px;">{{user.aliPayAccount}}</div>
        </van-col>
        <van-col
          offset="1"
          span="2"
          style="height:50px;display: flex;flex-direction: row;align-items: center;" @click="onModify('支付宝')"
        >
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </van-col>
  </div>
</template>

<script>
import UserApi from "./../service/UserApi";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
  },
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.push("/my");
    },
    /**
     * 修改信息
     */
    onModify(param) {
      this.$router.push("/user/info/modify?param=" + param);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>