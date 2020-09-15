<template>
  <div @scroll="handleScroll()">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <van-sticky>
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
    </van-sticky>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="item in productlist" :key="item" @click="gotoIdleGoods">
          <goods :product="item"></goods>
        </van-grid-item>
      </van-grid>
      <div style="height: 5rem;"></div>
    </van-pull-refresh>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Top from "@/components/Top.vue";
import Goods from "@/components/Goods.vue";
import IdleApi from "../service/IdleApi";

export default {
  data() {
    return {
      active: "home",
      postTitle: "主页",
      isActive: false,
      searchValue: "",
      isClear: false,
      pageNum: undefined,
      pageSize: undefined,
      loading: false, //是否正在加载（下拉）
      finished: false, //是否加载完成
      refreshing: false, //是否正在上拉刷新
      productlist: [],
    };
  },
  components: {
    Tabbar,
    Top,
    Goods,
  },
  async created() {
    this.pageNum = 1;
    this.pageSize = 8;
    let res = await IdleApi.getRecommendation({
      pageNum: 1,
      pageSize: 8,
    });
    this.productlist = res.data.list;
    console.log(this.productlist);
    for (var i in this.productlist) {
      var strs = new Array();
      strs = this.productlist[i].image.split(",");
      this.productlist[i].image = strs[0];
      console.log(this.productlist[i].image);
    }
  },
  methods: {
    onSearch(value) {
      //需要回车才能触发
      console.log(value);
    },
    onRefresh () {
      console.log("onRefresh");
      // 下拉刷新
      this.finished = false; // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
      this.loading = true; // 将 loading 设置为 true，表示处于加载状态
      //this.onload(); // 重新加载数据
    },
    handleScroll() {
      console.log("handleScroll");
      if (this.$el.scrollTop + this.$el.offsetHeight > this.$el.scrollHeight) {
        console.log("到达底部");
      } else {
        console.log("尚未达底部");
      }
    },
  },
};
</script>
