<template>
 <div id="header">


   <el-backtop
   :bottom="270"
   :right="0"
   :visibility-height="50"
   >
      <div
           style="{
             height: 100%;
             width: 100%;
             text-align: center;


           }"
         >
            <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
               <i class="el-icon-top "></i>
              </el-tooltip>
         </div>
   </el-backtop>
  <div id="left_right">
    <div id="left">
      <a target="_black" href="#">小米商城</a>
      <a target="_black" href="https://home.miui.com/">MIUI</a>
      <a target="_black" href="https://iot.mi.com/new/index.html">loT</a>
      <a target="_black" href="https://i.mi.com/">云服务</a>
      <a target="_black" href="#">金融</a>
      <a target="_black" href="#">有品</a>
      <a target="_black" href="https://xiaoai.mi.com/">小爱开放平台</a>
      <a target="_black" href="#">企业团购</a>
      <a target="_black" href="#">企业团购</a>
      <a target="_black" href="#">资质证照</a>
      <a target="_black" href="#">协议规则</a>
      <a target="_black" href="https://www.mi.com/appdownload">下载app</a>
      <a target="_self"  href="#"  @click="SelectLocationdialog = true">SelectLocation</a>
    </div>
    <div id="right">
      <a target="_black" href="/user/login">登录</a>
      <a target="_black" href="/user/zhuce">注册</a>
      <a target="_black" href="#">消息通知</a>

      <!-- 购物车框框 -->
       <el-dropdown>
        <span class="el-dropdown-link">
         <a href="#" >
             <i class="iconfont icon-qicheqianlian-"></i>
             购物车&nbsp;(0)
         </a>
        </span>
        <el-dropdown-menu slot="dropdown">

          <center>购物车中还没有商品，赶紧选购吧！</center>
        </el-dropdown-menu>
       </el-dropdown>
    </div>
  </div>


  <!-- SelectLocation弹窗 -->
  <el-dialog
    title="Select location or language"
    :visible.sync="SelectLocationdialog"
    width="55%"
    >
    <div class="selDialog">
      <p style="font-size: 20px;">Select location or language</p>
      <span @click="SelectLocationdialog = false" style="font-size: 30px;cursor: pointer;">x</span>
    </div>
   <div>
     <h1 style="font-size: 35px;"><center>Welcome to Mi.com</center></h1>
     <h3><center>Please select location or language</center></h3>
     <br />
     <el-button @click="Btnclick" v-for="item of language" type="warning" plain>{{item}}</el-button>

   </div>
  </el-dialog>




 </div>
</template>

<script>
  export default{
    name: 'Indexheader',
    data(){
      return{
        // select弹窗
        SelectLocationdialog:false,
        // 语言数组
        language: [
          '简体中文(HK)','繁体中文(TW)','English','India','singapore','Malaysia','Philippines'
        ]
      }
    },
    created() {

    },
    methods: {

      // 关闭弹窗函数
      handleClose() {
        this.SelectLocationdialog = false
      },

      // 按钮点击事件
      Btnclick(){
        this.SelectLocationdialog = false
        this.$router.push("/")
      }
    },

  }
</script>

<style lang="less" scoped>

 #left_right{
  margin: 0 auto;
   width: 1750px;
   display: flex;
   justify-content: space-between;
 }
 #header{
  margin-bottom: 30px;
  color: #8999b0;
  height: 1570px;
   display: flex;
   height: 40px;
   align-items: center;   //垂直居中
   justify-content: space-between; //两端对齐
   background-color: #333333;
 }

  #right a,#left a{
    text-decoration: none;
    color: #cccccc;
    padding:0 5px;
    font-size: 12px;
  }

  #right, #left{
    margin: 0 88px;
  }

  #right a:hover,#left a:hover{
   text-decoration: none;
   color: #FFFFFF;
  }

  .el-dropdown-link a:hover{
   text-decoration: none;
   color: #ff6700 !important;
  }

  .el-dropdown-menu{
   width: 300px;
     height: 68px;
  }

  .selDialog{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
  }
  .selDialog p,span{
   margin: 0 15px;
  }
  .selDialog span:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #FF0000;
    color: #FFFFFF;
    border-radius: 50%;
  }

  .el-button{

    margin: 10px 12px;
    width: 120px;
    height: 40px;
  }
  .el-backtop{
    position: fixed;
    right: 0;
    top: 680px;
    width: 73px;
    height: 73px;
    border-radius: 0  !important;
  }
  .el-icon-top{
    font-size: 40px;
    color: #000000;
  }
</style>
