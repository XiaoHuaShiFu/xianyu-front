<template>
  <div>
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <van-sticky>
      <van-search
        v-model="searchValue"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </van-sticky>
    <van-grid :border="false"  :column-num="2">
      <van-grid-item v-for="item in productlist" :key="item" @click="gotoIdleGoods">
        <goods :product="item"></goods>
      </van-grid-item>
    </van-grid>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Top from "@/components/Top.vue";
import Goods from "@/components/Goods.vue";
export default {
  data() {
    return {
      active: "home",
      postTitle:"主页",
      isActive:false,
      searchValue:undefined,
      productlist: [{
            id:1,
						name: '羊排 1000g',
						desc: '草园领头羊',
						price: 120,
						pic: require("../static/01.jpg")
					},
					{
						id:2,
						name: '猪瘦肉',
						desc: '乡村,精选',
						price: 80,
						pic: require("../static/02.jpg")
					},
					{
						id:3,
						name: '明虾',
						desc: '南美白虾',
						price: 240,
						pic: require("../static/03.jpg")
					},
					{
						id:4,
						name: '龙虾',
						desc: '澳洲出产',
						price: 160,
						pic: require("../static/01.jpg")
					},
					{
						id:5,
						name: '红萝卜',
						desc: '根根脆爽,饱满红嫩',
						price: 4,
						pic: require("../static/02.jpg")
					},
					{
						id:6,
						name: '青尖椒',
						desc: '入口微辣,肉厚质嫩',
						price: 4.98,
						pic: require("../static/03.jpg")
					}
				]
    };
  },
  components: {
    Tabbar,
    Top,
    Goods
  },
  methods: {
    gotoIdleGoods(){
		this.$router.push("/idleGoods");
	}
  },
};
</script>
