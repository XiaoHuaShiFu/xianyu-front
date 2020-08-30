<template>
  <div id="base" class>
    <!-- 内容框架 (动态面板) -->
    <div id="u4" class="ax_default" data-label="内容框架">
      <van-nav-bar left-text="返回" :border=false left-arrow @click-left="onClickLeft" />
      <div id="u4_state0" class="panel_state" data-label="State1" style>
        <div id="u4_state0_content" class="panel_state_content">
          <!-- Unnamed (图像 ) -->
          <div id="u5" class="ax_default image">
            <img id="u5_img" class="img" src="images/登入/u5.png" />
            <div id="u5_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u6"
            class="ax_default"
            data-left="48"
            data-top="212"
            data-width="280"
            data-height="50"
          >
            <!-- Unnamed (矩形) -->
            <div id="u7" class="ax_default _默认样式">
              <div id="u7_div" class></div>
              <div id="u7_text" class="text" style="display:none; visibility: hidden">
                <p></p>
              </div>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u8"
            class="ax_default"
            data-left="99"
            data-top="213"
            data-width="229"
            data-height="48"
          >
            <!-- 密码 (文本框) -->
            <div id="u9" class="ax_default _默认样式" data-label="密码">
              <div id="u9_div" class></div>
              <van-field
                style="left: -10px;"
                type="password"
                v-model="password"
                placeholder="请输入密码"
                maxlength="20"
              />
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u10" class="ax_default _默认样式">
            <div id="u10_div" class></div>
            <div id="u10_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u11" class="ax_default _默认样式" @click="toRegister">
            <div id="u11_div" class></div>
            <div id="u11_text" class="text">
              <p>
                <span>创建账号</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u12" class="ax_default _默认样式">
            <div id="u12_div" class></div>
            <div id="u12_text" class="text">
              <p>
                <span>忘记密码</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u13" class="ax_default image">
            <img id="u13_img" class="img" src="images/登入/u13.svg" />
            <div id="u13_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u14" class="ax_default image">
            <img id="u14_img" class="img" src="images/登入/u14.svg" />
            <div id="u14_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u15" class="ax_default _默认样式" @click="onLogin">
            <div id="u15_div" class></div>
            <div id="u15_text" class="text">
              <p>
                <span>登录</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u16"
            class="ax_default"
            data-left="99"
            data-top="164"
            data-width="229"
            data-height="48"
          >
            <!-- 账号 (文本框) -->
            <div id="u17" class="ax_default _默认样式" data-label="账号">
              <div id="u17_div" class></div>
              <van-field
                style="left: -10px;"
                v-model="username"
                placeholder="请输入用户名"
                maxlength="20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from "../service/Login";
import UserApi from "../service/UserApi";
import { Notify } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    /**
     * 跳转到注册页面
     */
    toRegister() {
      this.$router.push("/register");
    },
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.push("/home");
    },
    /**
     * 登录
     */
    async onLogin() {
      if (this.password.length < 6) {
        Notify("密码长度应该大于等于6");
        return;
      }
      let res = await login(this.username, this.password, "USER");
      // 密码错误
      if (res.status != 201) {
        Notify({ type: "warning", message: "账号或密码错误" });
        return;
      }
      if (res.status == 201) {
        // 密码正确
        res = res.data;
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("tokenType", res.type);
        sessionStorage.setItem("id", res.id);
        Notify({ type: "success", message: "登录成功" });
        await UserApi.getUserAndSaveInSessionStorage(res.id);
        // 跳转
        this.$router.push(this.$route.query.toPage);
      }
    },
  },
};
</script>

<style scoped src="../../public/files/登入/styles.css">
</style>