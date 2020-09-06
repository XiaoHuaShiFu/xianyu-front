<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #title>
        <div style="font-size: 16px; color: #999; font-weight:bold;">添加地址</div>
      </template>
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import UserApi from "./../service/UserApi";
import Area from "./../../public/area";
import { Notify } from 'vant';
export default {
  data() {
    return {
      user: {},
      areaList:{},
      searchResult: [],
    };
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
    this.areaList = Area;
  },
  methods: {
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.go(-1);
    },
    async onSave(content) {
      console.log(content)
      console.log({
        userId: this.user.id,
        address: content.addressDetail,
        fullName: content.name,
        phone: content.tel
      })
      let res = await this.$Http.postAddress({
        userId: this.user.id,
        address: content.addressDetail,
        fullName: content.name,
        phone: content.tel
      }, true);
      console.log(res)
      // 保存成功
      if (res.status == 201) {
        Notify({ type: "success", message: "创建地址成功！" });
        this.$router.go(-1);
      } else {
        Notify({ type: "warning", message: "创建地址失败，请重试。" });
      }
    },
    onDelete() {
      console.log("delete");
    },
    onChangeDetail(val) {
      console.log(val)
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>