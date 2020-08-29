<template>
  <div id="base" class @click="toHome">
    <!-- Unnamed (矩形) -->
    <div id="u0" class="ax_default flow_shape">
      <div id="u0_div" class></div>
      <div id="u0_text" class="text" style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- 引导页 (动态面板) -->
    <div id="u1" class="ax_default" data-label="引导页">
      <div id="u1_state0" class="panel_state" data-label="启动页" style>
        <div id="u1_state0_content" class="panel_state_content">
          <!-- Unnamed (SVG) -->
          <div id="u2" class="ax_default image">
            <img id="u2_img" class="img" src="images/启动/u2.svg" />
            <div id="u2_text" class="text" style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u3" class="ax_default _文本段落">
            <div id="u3_div" class></div>
            <div id="u3_text" class="text">
              <p>
                <span>让闲置物跳回家</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("ddd");
  },
  methods: {
    /**
     * 首页跳转
     */
    toHome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style scoped src="../../public/files/启动/styles.css">

</style>