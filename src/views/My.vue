<template>
  <div>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  data() {
    return {
      active: "my",
    };
  },
  components: {
    Tabbar
  },
  created() {
    console.log("my page")
  },
};
</script>
