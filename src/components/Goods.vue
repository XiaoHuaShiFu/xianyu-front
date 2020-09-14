<template>
    <div class="content" @click="gotoIdleGoods">
		<van-image :src="product.image"></van-image>
		<div>{{product.title}}</div>
		<div class="gray_text">{{product.userId}}</div>
		<div class="cart-wrap">
			<div>
				<span style="color:red">¥{{product.price}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['product'],
		methods:{
			gotoIdleGoods() {
      this.$router.push("/idleGoods");
      //this.$router.push('/test');
    },
		}
	}
</script>

<style scoped="scoped">
	.cart-wrap{
		flex-direction: row;
		justify-content: space-between;
	}
	.gray_text{
		color:#ccc;
	}
</style>