<template>
  <div>
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Top from "@/components/Top.vue";
export default {
  data() {
    return {
      active: "message",
      postTitle:"消息",
      isActive:false,
    };
  },
  components: {
    Tabbar,
    Top
  },
  created() {
    console.log("message page")
  },
};
</script>