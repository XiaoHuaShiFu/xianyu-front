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
      active: "idle",
    };
  },
  components: {
    Tabbar
  },
  created() {
    console.log("idle page")
  },
};
</script>
