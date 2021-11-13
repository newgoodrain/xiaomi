<template>
  <div class="Mindex">
    <div class="second_img" >
      <div class="first">
        <ul>
          <li>
            <a href="#">
              <li v-for="(icon,index) of iconInfo" :key="index">
                <el-image :src="icon.URL"></el-image>
                <p style="font-size: 8px;">{{icon.title}}</p>
              </li>
            </a>
          </li>
        </ul>
     </div>
        <div class="right_img" >
          <ul>
            <li v-for="(url, index) of ImgURL" :key="index">
              <a href="#">
                <el-image :src="url"></el-image>
              </a>
            </li>
          </ul>

     </div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'Mindex',
    data(){
      return{
        // 照片
        ImgURL:[
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
        ],
        // 小图标
        iconInfo: [
          {title:"小米秒杀", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"},
          {title:"企业团购", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"},
          {title:"F码通道", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"},
          {title:"米粉卡", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"},
          {title:"以旧换新", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"},
          {title:"话费充值", URL:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"}
         ]
      }
    }

  }
</script>

<style lang="less" scoped>
  .Mindex{
    // margin-top: 30px !important;
    margin: 0 auto;
	width: 1573px;

  }
  .second_img ul li{
    list-style: none;
    float: left;
  }
  .first{
    float: left;
    background-color: #5f5750;
    width: 235px;
    height: 169px;
  }

  .first ul a{
    text-decoration: none;
    color: #FFFDEF;

  }
  .first ul li:hover{
    color: #ff6700;

  }
  .second_img{
    display: flex;
    justify-content: space-between;
  }
  .first ul li{
    padding: 10px;
  }
  .first .el-image{
    width: 40px;
    height: 40px;
  }
  .right_img .el-image{
    height: 169px;
    width: 360px;
  }
  .right_img li{
    margin-left: 30px;
  }
</style>
