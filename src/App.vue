<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less" >
@import "/data/styles.css";
@import "/resources/css/axure_rp_page.css";
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515a6e;
  font-size: 14px;
}

/*包含以下四种的链接*/
a {
  color: #515a6e;
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>
