<template>
  <div class="good">
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    
    <van-submit-bar
            :loading="isSubLoading"
            :price="total"
            button-text="结算"
            @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>
<script>
import Top from "@/components/Top.vue";
export default {
  data() {
    return {
      postTitle: "订单信息",
      isActive: true,
      total:10000,
    };
  },
  components: {
    Top,
  },
  methods:{

  }
};
</script>