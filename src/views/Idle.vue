<template>
  <div>
    <Top :postTitle="postTitle" :isActive="isActive"></Top>
    <van-cell-group>
       <van-field 
         v-model="idleName"
         placeholder="请输入闲置物品名字" 
         label="物品名字" 
       />
       <van-field 
         v-model="idlePrice"
         placeholder="请输入价格" 
         label="物品价格" 
         type="number"
       />
    </van-cell-group>
    <div class="text-area">
      <textarea placeholder="请输入闲置描述..." >
      </textarea>
    </div>
    <div class="sudoku_row"  >
        <div class="sudoku_item " v-for="(sudoku,index) in sudokus" :key="index">
            <img :src="sudoku.img_src" width="80" height="80" >
            <!--{{sudoku.name}}-->
        </div>
        <van-uploader class="sudoku_item " :after-read="Upload" accept="image/*" v-show="showUpload">
            <img src="images/发布闲置/u120.svg">
        </van-uploader>
    </div>
    <div>
      <van-button class="button-publish">发布</van-button>
    </div>
    <Tabbar :active="active"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import Top from "@/components/Top.vue";
//import UserApi from "./../service/UserApi";
//import { Notify } from "vant";
export default {
  data() {
    return {
      active: "idle",
      postTitle:"发布闲置",
      isActive:false,
      sudokus:[],
      showUpload:true,
      idleName:"",
      idlePrice:undefined,
    };
  },
  components: {
    Tabbar,
    Top
  },
  created() {
    console.log("idle page")
  },
  methods: {
    /*
    上传图片
     */
    Upload(file){
      console.log("Upload");
      this.sudokus.push({
        id:this.sudokus.length,
        img_src:file.content
      })
      if(this.sudokus.length>=6){
        //Notify("上传图片最多6张！");
        this.showUpload=false;
        return;
      }
    },
    clearImg(index){
      this.showImgsrc.splice(index,1);
    },
    /*
    发布闲置
     */
    async onPublish() {
      //let userId = sessionStorage.getItem("id");
      //let res = await UserApi.updateUserAvatar(userId, file.file);
      //this.user = res.data;
    },
  },
};
</script>  
<style >  

/*文本域*/
  .text-area{
    width: 100%;
    border-top:1px solid gainsboro;
    border-bottom:1px solid gainsboro;
 
  }
  .text-area textarea {
    width: 100%;
    margin: 0.75rem  0;
    border: none;
    outline: none;
    padding-left: 1.125rem;
    height: 6.5rem ;
  }
 
  .text-area textarea::-webkit-input-placeholder {
    color: #9E9E9E;
 
  }

/*图片域*/
    .sudoku_row{
        display: flex;
        align-items: center;
        width:100%;
        flex-wrap: wrap;
    }
    .sudoku_item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:33%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .opacity{
        opacity: 0.4;
        background: #e5e5e5;
    }
    .sudoku_item img{
        margin-bottom: 3px;
        display: block;
    }
    
  /* 确认按钮 */
  .button-publish{
    width: 50%;
    height: 45px;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    background:#245fd7;
  }
</style>  
