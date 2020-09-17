<template>
  <div>
    <van-nav-bar
      :left-text="title"
      :border="false"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      right-text="保存"
    />
    <van-col span="24">
      <van-row style="border-bottom:1px solid #eee;" />
      <van-row>
        <van-col span="24">
          <van-field :type="type" v-model="value" :placeholder="placeholder" />
        </van-col>
      </van-row>
      <van-row style="border-bottom:1px solid #ccc;" />
    </van-col>
  </div>
</template>

<script>
import UserApi from "./../service/UserApi";
import { Notify } from "vant";
export default {
  data() {
    return {
      user: {},
      title: "",
      value: "",
      placeholder: "",
      type: "text",
    };
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
    this.title = "更改" + this.$route.query.param;
    if (this.$route.query.param == "昵称") {
      this.value = this.user.username;
      this.placeholder = "请输入用户名";
    }
    if (this.$route.query.param == "密码") {
      this.type = "password";
      this.placeholder = "请输入密码";
    }
    if (this.$route.query.param == "支付宝") {
      this.value = this.user.aliPayAccount;
      this.placeholder = "请输入支付宝";
    }
  },
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.push("/user/info");
    },
    /**
     * 修改信息
     */
    onModify(param) {
      this.$router.push("/user/info/modify?param=" + param);
    },
    /**
     * 保存修改的信息
     */
    async onClickRight() {
      let user = { id: this.user.id };
      if (this.$route.query.param == "昵称") {
        user.nickName = this.value;
      } else if (this.$route.query.param == "密码") {
        user.password = this.value;
      } else if (this.$route.query.param == "支付宝") {
        user.aliPayAccount = this.value;
      }
      console.log("user:"+user);
      let res = await UserApi.updateUser(user);
      if (res.status == 200) {
        Notify({ type: "success", message: "修改成功！" });
        await UserApi.getUserAndSaveInSessionStorage(this.user.id);
        // 跳转到用户信息页面
        this.$router.push("/user/info");
      } else {
        Notify({ type: "warning", message: "修改失败，请重试。" });
      }
    },
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