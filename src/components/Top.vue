<template>
    <div class="hello">
        <van-row class="m-header">
            <van-col span="24">
				<van-icon name="arrow-left" class="m-header-icon" v-show="visible" @click="Back"/>
				{{postTitle}}
			</van-col>
        </van-row>
    </div>
</template>
<script>
export default {
  props: ['postTitle','isActive'],
  methods: {
    Back() {
		//console.log('postTitle:'+this.postTitle);   
		this.$router.go(-1);
	},
	ShowBack(){
		this.$emit('update:visible',this.isActive);
	},
  },
};
</script>
<style scoped>
    .m-header {
        height: 50px;
        line-height: 50px;
        background: #245fd7;
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 16px;
        left: 6px;
        font-size: 18px;
    }
</style>
