<template>
  <div id="base" class>
    <!-- 内容框架 (动态面板) -->
    <div id="u141" class="ax_default" data-label="内容框架">
      <Tabbar :active="active"></Tabbar>
      <div id="u141_state0" class="panel_state" data-label="内容" style>
        <div id="u141_state0_content" class="panel_state_content">
          <!-- Unnamed (矩形) -->
          <div id="u142" class="ax_default _默认样式">
            <div id="u142_div" class></div>
            <div id="u142_text" class="text">
              <p></p>
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u143" class="ax_default _默认样式">
            <van-uploader :after-read="afterRead">
              <van-image round height="80" width="80" fit="cover" :src="user.avatarUrl" />
            </van-uploader>

            <!-- <img id="u143_img" class="img " :src="user.avatarUrl"/> -->
            <div id="u143_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u144" class="ax_default _默认样式" @click="onUserInfo">
            <div id="u144_div" class></div>
            <div id="u144_text" class="text">
              <p>
                <span>{{user.nickName}}</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u145" class="ax_default _默认样式">
            <div id="u145_div" class></div>
            <div id="u145_text" class="text">
              <p style="font-size:12px;">
                <span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#999999;">在卖</span>
              </p>
              <p style="font-size:16px;">
                <span
                  style="font-family:'Georgia Negreta', 'Georgia Normal', 'Georgia', sans-serif;font-weight:700;color:#5692CC;"
                >{{totalNormal}}</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u146" class="ax_default _默认样式">
            <div id="u146_div" class></div>
            <div id="u146_text" class="text">
              <p style="font-size:12px;">
                <span style="font-family:'微软雅黑', sans-serif;font-weight:400;color:#999999;">收藏</span>
              </p>
              <p style="font-size:16px;">
                <span
                  style="font-family:'Georgia Negreta', 'Georgia Normal', 'Georgia', sans-serif;font-weight:700;color:#5692CC;"
                >17</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u147" class="ax_default _默认样式">
            <div id="u147_div" class></div>
            <div id="u147_text" class="text">
              <p>
                <span>系统设置</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u148" class="ax_default _默认样式"  >
            <div id="u148_div" class ></div>
            <div id="u148_text"  class="text">
              <p>
                <span @click="toBuyInXianyu" >买在贤鱼</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u149" class="ax_default _默认样式">
            <div id="u149_div" class></div>
            <div id="u149_text" class="text">
              <p>
                <span>待付款</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u150" class="ax_default _默认样式">
            <div id="u150_div" class></div>
            <div id="u150_text" class="text">
              <p>
                <span>待收货</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u151" class="ax_default _默认样式">
            <div id="u151_div" class></div>
            <div id="u151_text" class="text">
              <p>
                <span>完成</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u152" class="ax_default image" >
            <img id="u152_img" class="img" src="images/我的/u152.svg" />
            <div id="u152_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u153" class="ax_default image" >
            <img id="u153_img" class="img" src="images/我的/u153.svg" />
            <div id="u153_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u154" class="ax_default image" >
            <img id="u154_img" class="img" src="images/我的/u154.svg" />
            <div id="u154_text" class="text" style="display:none; visibility: hidden" >
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u155" class="ax_default image" >
            <img id="u155_img" class="img" src="images/我的/u155.svg" />
            <div id="u155_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u156" class="ax_default image" >
            <img id="u156_img" class="img" src="images/我的/u156.svg"  @click="onUserHome" />
            <div id="u156_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (热点) -->
          <div id="u157" class="ax_default"></div>

          <!-- Unnamed (矩形) -->
          <div id="u158" class="ax_default _默认样式"  @click="toSellInXianyu"  >
            <div id="u158_div" class></div>
            <div id="u158_text" class="text">
              <p >
                <span>卖在贤鱼</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u159" class="ax_default _默认样式">
            <div id="u159_div" class></div>
            <div id="u159_text" class="text">
              <p>
                <span>等待付款</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u160" class="ax_default _默认样式">
            <div id="u160_div" class></div>
            <div id="u160_text" class="text">
              <p>
                <span>需发货</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u161" class="ax_default _默认样式">
            <div id="u161_div" class></div>
            <div id="u161_text" class="text">
              <p>
                <span>完成</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u162" class="ax_default _图片_" >
            <img id="u162_img" class="img" src="images/我的/u162.svg" />
            <div id="u162_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u163" class="ax_default image" >
            <img id="u163_img" class="img" src="images/我的/u152.svg" />
            <div id="u163_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u164" class="ax_default image" >
            <img id="u164_img" class="img" src="images/我的/u153.svg" />
            <div id="u164_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (热点) -->
          <div id="u165" class="ax_default"></div>

          <!-- Unnamed (SVG) -->
          <div id="u166" class="ax_default _图片_" >
            <img id="u166_img" class="img" src="images/我的/u162.svg" />
            <div id="u166_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u167" class="ax_default _图片_" @click="toBuyInXianyu">
            <img id="u167_img" class="img" src="images/我的/u167.svg" />
            <div id="u167_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u168" class="ax_default _图片_" @click="toSellInXianyu">
            <img id="u168_img" class="img" src="images/我的/u168.svg" />
            <div id="u168_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u169" class="ax_default box_1" @click="toAddress">
            <div id="u169_div" class></div>
            <div id="u169_text" class="text">
              <p>
                <span>地址管理</span>
              </p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u170" class="ax_default _图片_">
            <img id="u170_img" class="img" src="images/我的/u170.svg" />
            <div id="u170_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (SVG) -->
          <div id="u171" class="ax_default _图片_">
            <img id="u171_img" class="img" src="images/我的/u155.svg" />
            <div id="u171_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航栏 (动态面板) -->
    <div id="u172" class="ax_default" data-label="导航栏">
      <div id="u172_state0" class="panel_state" data-label="1" style>
        <div id="u172_state0_content" class="panel_state_content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import UserApi from "./../service/UserApi";
import IdleApi from "./../service/IdleApi";
export default {
  data() {
    return {
      active: "my",
      user: {},
      totalNormal: 0
    };
  },
  components: {
    Tabbar,
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
    let res = await IdleApi.listIdles({
        pageNum: 1,
        pageSize: 0,
        userId: this.user.id,
        status: "NORMAL",
      });
      this.totalNormal = res.data.total;
  },
  methods: {
    /**
     * 更新头像
     */
    async afterRead(file) {
      let userId = sessionStorage.getItem("id");
      let res = await UserApi.updateUserAvatar(userId, file.file);
      this.user = res.data;
    },
    /**
     * 
     */
    toSellInXianyu() {
      console.log("zzzzzzzzzzzzzz")
      this.$router.push("/user/sellinxianyu");
    },
    /**
     * 
     */
    toBuyInXianyu() {
      console.log("zzzzzzzzzzzzzz")
      this.$router.push("/user/buyinxianyu");
    },
    /**
     * 去到用户信息页面
     */
    onUserInfo() {
      this.$router.push("/user/info");
    },
    /**
     * 去到用户页面
     */
    onUserHome() {
      this.$router.push("/user/home?userId=" + this.user.id);
    },
    /**
     * 
     */
    toAddress() {
      this.$router.push("/user/address");
    },
    
  },
};
</script>
<style scoped src="../../public/files/我的/styles.css">
</style>