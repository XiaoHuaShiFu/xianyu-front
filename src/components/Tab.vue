<template>
    <van-sticky>
        <van-tabs title-active-color="#245fd7" background="#eee" color="#245fd7" swipe-threshold="5" v-model="tabActive" @change="getPage">
			<van-tab v-for="item in tabList" :key="item" :title="item">
                <router-view></router-view>
            </van-tab>
		</van-tabs>
    </van-sticky>
</template>
<script>
export default {
    name: 'Tab',
    data() {
        return {
            tabActive: 0, // 当前栏
            tabList: ['信息', '留言'] // tab 列表
        };
    },
    methods: {
        // 切换页面
        getPage(index) {//title
            switch(index) {
                case 0:
                    this.$router.push('/idleGoods/idleInfo');
                    break;
                case 1:
                    this.$router.push('/idleGoods/idleComment');
                    break;
                default:
                    return false;
            }
        }
    }
};
</script>