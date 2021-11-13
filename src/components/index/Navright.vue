<template>
  <div>
   <el-card>
     <div class="divURL" v-for="(item, index) of rightURL" :key="index">
       <el-image :src="item.url"></el-image>
       <p>{{item.title}}</p>
     </div>
   </el-card>
  </div>
</template>

<script>
  export default{
    name: 'Navright',
    data(){
      return {
        rightURL:[
          {title: '手机app' ,url:"https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"},
          {title: '个人中心',url:"https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"},
          {title: '售后服务',url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"},
          {title: '人工服务',url:"https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"},
          {title: '购物车'  ,url:"https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"}
        ]
      }
    },

    methods: {
      changeImguri() {
        var changeUrl = document.querySelector(".divURL")
        changeUrl.onmouseover = function(){
          this.rightURL = [
          {title: '手机app'  ,url:"https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"},
          {title: '个人中心' ,url:"https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"},
          {title: '售后服务' ,url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"},
          {title: '人工服务' ,url:"https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"},
          {title: '购物车'   ,url:"https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"}
        ]
        }
      }
    },
  }
</script>

<style lang="less" scoped>

  img{
    width: 30px;
    height: 30px;
  }
  .el-card{
    position: fixed;
    top: 200px;
    right: 0;
    width: 70px;
    height: 480px;
    z-index: 10000;
  }
  .el-card p{
    font-size: 10px;
    text-align: center;
  }
  .el-card div{
    margin: 5px 0;
  }
  .el-card div:hover{
    color: #ff6700;
  }
</style>
