<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import userApi from '../service/UserApi';
export default {
  name: 'Home',
  
  created() {
    userApi.getUser()
  }
}
</script>