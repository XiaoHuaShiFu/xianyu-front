<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #title>
        <div style="font-size: 16px; color: #999; font-weight:bold;">收货地址</div>
      </template>
    </van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import UserApi from "./../service/UserApi";
import AddressApi from "./../service/AddressApi";
import adaptString from "./../utils/StringUtils";
export default {
  data() {
    return {
      user: {},
      list: [],
      chosenAddressId: null,
      disabledList: [],
      firstIdx: null,
    };
  },
  async created() {
    let userId = sessionStorage.getItem("id");
    this.user = await UserApi.getUserAndSaveInSessionStorage(userId);
    this.onLoad1();
  },
  methods: {
    onAdd() {
      this.$router.push("/user/address/edit");
    },
    onEdit(item, index) {
      console.log("编辑地址:" + index);
    },
    /**
     * 返回上一页
     */
    onClickLeft() {
      this.$router.go(-1);
    },
    /**
     * 加载下一页
     */
    async onLoad1() {
      let res = await AddressApi.listAddresses({
        pageNum: 1,
        pageSize: 9999,
        userId: this.user.id,
      });
      let list0 = res.data.list;
      console.log(list0);
      if (list0.length > 0) {
        for (let i = 0; i < list0.length; i++) {
          list0[i].name = list0[i].fullName;
          list0[i].tel = list0[i].phone;
          list0[i].address = adaptString(list0[i].address, 30);
          if (this.firstIdx == null) {
            this.firstIdx = i;
          }
          if (this.chosenAddressId == null) {
            this.chosenAddressId = list0[i].id;
          }
          list0[i].isDefault = false;
          this.list.push(list0[i]);
        }
        list0[this.firstIdx].isDefault = true;
        this.pageNum++;
      }
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