<template>
  <div id="base" class>
    <!-- 内容框架 (动态面板) -->
    <div id="u0" class="ax_default" data-label="内容框架">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
      <div id="u0_state0" class="panel_state" data-label="State1" style>
        <div id="u0_state0_content" class="panel_state_content">
          <!-- Unnamed (组合) -->
          <div
            id="u1"
            class="ax_default"
            data-left="48"
            data-top="278"
            data-width="280"
            data-height="50"
          >
            <!-- Unnamed (矩形) -->
            <div id="u2" class="ax_default _默认样式">
              <div id="u2_div" class></div>
              <div id="u2_text" class="text" style="display:none; visibility: hidden">
                <p></p>
              </div>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u3"
            class="ax_default"
            data-left="99"
            data-top="279"
            data-width="229"
            data-height="48"
          >
            <!-- 密码 (文本框) -->
            <div id="u4" class="ax_default _默认样式" data-label="密码">
              <div id="u4_div" class></div>
              <van-field
                style="left: -10px;"
                v-model="password2"
                placeholder="请再次输入密码"
                type="password"
                maxlength="20"
              />
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u5" class="ax_default _默认样式" @click="onRegister">
            <div id="u5_div" class></div>
            <div id="u5_text" class="text">
              <p>
                <span>确认</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u6"
            class="ax_default"
            data-left="48"
            data-top="180"
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

            <!-- Unnamed (文本框) -->
            <div id="u8" class="ax_default _默认样式">
              <div id="u8_div" class></div>
              <input id="u8_input" type="text" value class="u8_input" />
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u9" class="ax_default image">
            <img id="u9_img" class="img" src="images/注册/regen/u9.svg" />
            <div id="u9_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u10"
            class="ax_default"
            data-left="48"
            data-top="229"
            data-width="280"
            data-height="50"
          >
            <!-- Unnamed (矩形) -->
            <div id="u11" class="ax_default _默认样式">
              <div id="u11_div" class></div>
              <div id="u11_text" class="text" style="display:none; visibility: hidden">
                <p></p>
              </div>
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u12"
            class="ax_default"
            data-left="99"
            data-top="181"
            data-width="229"
            data-height="48"
          >
            <!-- 手机号码 (文本框) -->
            <div id="u13" class="ax_default _默认样式" data-label="手机号码">
              <div id="u13_div" class></div>
              <van-field
                style="left: -10px;"
                v-model="username"
                placeholder="请输入用户名"
                maxlength="20"
              />
            </div>
          </div>

          <!-- Unnamed (组合) -->
          <div
            id="u14"
            class="ax_default"
            data-left="99"
            data-top="230"
            data-width="229"
            data-height="48"
          >
            <!-- 验证码 (文本框) -->
            <div id="u15" class="ax_default _默认样式" data-label="验证码">
              <div id="u15_div" class></div>
              <van-field
                style="left: -10px;"
                v-model="password1"
                placeholder="请输入密码"
                type="password"
                maxlength="20"
              />
            </div>
          </div>

          <!-- Unnamed (图像 ) -->
          <div id="u16" class="ax_default image">
            <img id="u16_img" class="img" src="images/注册/regen/u16.png" />
            <div id="u16_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u17" class="ax_default image">
            <img id="u17_img" class="img" src="images/注册/regen/u17.svg" />
            <div id="u17_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u18" class="ax_default image">
            <img id="u18_img" class="img" src="images/注册/regen/u9.svg" />
            <div id="u18_text" class="text" style="display:none; visibility: hidden">
              <p></p>
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
      password1: "",
      password2: "",
    };
  },
  created() {},
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.push("/login");
    },
    /**
     * 注册
     */
    async onRegister() {
      if (this.password1.length < 6 || this.password2.length < 6) {
        Notify({ type: "warning", message: "密码长度应该大于6" });
        return;
      }

      if (this.password1 != this.password2) {
        Notify({ type: "warning", message: "两个密码不一致！" });
        return;
      }

      let res = await this.$Http.postUser({
        username: this.username,
        password: this.password1,
      });
      // 注册成功
      if (res.status == 201) {
        Notify({ type: "success", message: "注册成功！" });
        let res = await login(this.username, this.password1, "USER");
        if (res.status == 201) {
          res = res.data;
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("tokenType", res.type);
          sessionStorage.setItem("id", res.id);
          await UserApi.getUserAndSaveInSessionStorage(res.id);
          // 跳转到首页
          this.$router.push("/home");
        }
      } else {
        Notify({ type: "warning", message: "注册失败，请重试。" });
      }
    },
  },
};
</script>

<style scoped src="../../public/files/注册/styles.css">
</style>