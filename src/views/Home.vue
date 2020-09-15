<template>
  <div @scroll="handleScroll()">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <van-sticky>
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
    </van-sticky>
    <div class="home">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="goods">
          <div class="goods-content" v-for="item in productlist" :key="item" @click="go(item.id)">
            <div class="goods-picture">
              <img :src="item.image" alt="商品" />
            </div>
            <p class="goods-name">{{ item.title || '-' }}</p>
            <p class="goods-details">{{ item.detail || '-' }}</p>
            <span>{{ item.price || '-' }}元</span>
          </div>
        </div>
      </van-list>
      <div style="height: 5rem;"></div>
    </div>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Top from "@/components/Top.vue";
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
      isSearch: false,
      loading: false, // 加载中
      finished: false, // 加载完成
      productlist: [],
    };
  },
  components: {
    Tabbar,
    Top,
  },
  created() {
    console.log("created");
    this.pageNum = 0;
    this.pageSize = 8;
    this.onLoad();
  },
  methods: {
    go(val){
      console.log("go" + val);
      this.$router.push({path:'/idleGoods',query:{id:val}})
    },
    onSearch() {
      //需要回车才能触发
      //console.log("onSearch" + this.searchValue);
      this.pageNum = 0;
      this.pageSize = 8;
      this.productlist = [];
      this.isSearch=true;
      this.onLoad();
    },
    async onLoad() {
      //console.log("onLoad"+this.searchValue);
      let list,res;
      if (this.isSearch) {
        res = await IdleApi.getSearch({
          pageNum: this.pageNum + 1,
          pageSize: this.pageSize,
          keyword: this.searchValue,
        });
        list = res.data.list;
      } else {
        res = await IdleApi.getRecommendation({
          pageNum: this.pageNum + 1,
          pageSize: this.pageSize,
        });
        list = res.data.list;
      }
      let num = 0;
      for (var i in list) {
        var strs = new Array();
        strs = list[i].image.split(",");
        list[i].image = strs[0];
        this.productlist.push(list[i]);
        num++;
      }
      this.loading = false;
      if (num == 0) {
        this.finished = true;
      } else {
        this.pageNum += 1;
      }
    },
  },
};
</script>
<style scoped lang='less'>
.home {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  background: #fff;
  background-size: 100% 100%;
  .goods {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 0.1rem 0.1rem;
    .goods-content {
      display: flex;
      align-items: center;
      flex-direction: column;

      width: 49%;
      padding: 0.1rem 0.08rem;
      margin-bottom: 0.08rem;
      background-color: #fff;
      border-radius: 0.04rem;
      .goods-picture {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .goods-name {
        width: 100%;
        text-align: center;
        font-size: 0.14rem;
        color: #000;
        margin-top: 0.1rem;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .goods-details {
        width: 100%;
        text-align: center;
        font-size: 0.12rem;
        color: #666;
        margin-top: 0.1rem;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        font-size: 0.14rem;
        color: #ff6700;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>