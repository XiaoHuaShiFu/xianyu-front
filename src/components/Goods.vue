<template>
    <div class="content">
		<van-image :src="product.pic"></van-image>
		<div>{{product.name}}</div>
		<div class="gray_text">{{product.desc}}</div>
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