<template>
  <div>
      <van-list 
        v-model="listLoading" 
        @load="OnLoad" 
        :finished="finishedList" 
        finished-text="没有更多了"
      >
        <van-card 
          v-for="item in msgList"
          :key="item"
          :desc="item.content"
          :title="item.name"
          :thumb="item.picture"
        >
          <div slot="footer">
            {{item.date}}
          </div>
        </van-card>
      </van-list>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: "message",
      postTitle:"消息",
      isActive:false,
      props: ["idleId"],
      msgList:[
        {
          name:"吴大哥",
          content:"吴大哥丝袜",
          picture:"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
          date:"2020-3-10"
        },
        {
          name:"吴大哥",
          content:"吴大哥丝袜",
          picture:"http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",
          date:"2020-3-10"
        },
        {
          name:"吴大哥",
          content:"吴大哥丝袜",
          picture:"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
          date:"2020-3-10"
        }],
    };
  },
  components: {
  },
  created() {
    console.log("message page")
  },
  methods: {
    /*
    加载信息
     */
    async OnLoad() {
      console.log("OnLoad");
      //let userId = sessionStorage.getItem("id");
      //let res = await UserApi.updateUserAvatar(userId, file.file);
      //this.user = res.data;
    },
  },
};
</script>