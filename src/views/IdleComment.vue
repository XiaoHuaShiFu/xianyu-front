<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="OnLoad">
      <van-card
        v-for="item in msgList"
        :key="item"
        :desc="item.content"
        :title="item.user.username"
        :thumb="item.user.avatarUrl"
      >
        <div slot="footer">{{item.createTime}}</div>
      </van-card>
    </van-list>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      active: "message",
      postTitle: "消息",
      isActive: false,
      loading: false, // 加载中
      finished: false, // 加载完成
      pageNum: 0,
      pageSize: 8,
      msgList: [],
    };
  },
  components: {},
  created() {
    console.log("message page");
    this.pageNum = 0;
    this.pageSize = 8;
  },
  methods: {
    /*
    加载信息
     */
    async OnLoad() {
      console.log("message page onLoad"+this.id);
      let res = await this.$Http.getComments({
        pageNum: this.pageNum + 1,
        pageSize: this.pageSize,
        idleId: this.id,
      });
      var num=res.data.total;
      this.msgList=res.data.list;
      this.loading = false;
      if(num==0){
        this.finished = true;
      }
      else {
        this.pageNum += 1;
      }
      console.log(res);
    },
  },
};
</script>