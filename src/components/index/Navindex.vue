<template>
  <div id="Navindex">
  <!-- 导航栏 -->

    <div  @mouseleave="show = false" id="header-nav">
      <img  @mouseleave="show = false" class="logo_mi" src="http://s02.mifile.cn/assets/static/image/mi-logo.png" title="小米官网" />
      <ul>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">小米手机</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">Redmi红米</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">电视</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">笔记本</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">家电</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">路由器</a></li>
        <li  @mouseleave="show = false"><a @mouseover="showNav()" href="#">智能硬件</a></li>
        <li  @mouseleave="show = false"><a href="#">服务</a></li>
        <li  @mouseleave="show = false"><a href="#">社区</a></li>
      </ul>
      <el-input v-model="search_input" placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <!-- 动画模块 -->
       <transition name="myNav">
       <div id="donghua" @mouseover="show = true" @mouseleave="show = false" v-show="show = show" >
      		<el-card>
      			<div  class="children_list" v-for="item of navList" :key="item.id" >
      			  <ul>
      			    <li class="children_list1" style="text-align: center;">
      			      <el-image  :src="item.imgURL"></el-image>
      			      <div class="title">{{item.name}}</div>
      			      <p class="price">{{item.price}}元起</p>
      			    </li>
      			  </ul>
      			</div>
      		</el-card>
      </div>
      </transition>
  </div>



    <!-- 级联选择器 -->
    <div class="content">
      <div class="cascader" >
        <ul id="leftList">
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">手机 电话卡<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">电视 盒子<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">笔记本 显示器 平板<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">家电 插线板<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">出行 穿戴<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">智能 路由器<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">电源 配件<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">健康 儿童<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">耳机 音响<i class="el-icon-arrow-right"></i></a></li>
          <li @mouseover=" showRight = true" @mouseleave=" showRight = false"  > <a href="#">生活 箱包<i class="el-icon-arrow-right"></i></a></li>
        </ul>

        <!-- 右边卡片区域 -->
        <div id="content_right" @mouseover=" showRight = true "@mouseleave=" showRight = false" v-show="showRight = showRight">
          <el-card>
            <div id="rightListDiv">
              <ul>
                <li v-for="item in rightList" :key="item.id">
                  <a href="#">
                    <el-image :src="item.URL"></el-image>
                    <span style="color: #000000;">{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </el-card>
        </div>

      </div>


    <!-- 轮播图 -->
    <el-carousel indicator-position="inside" arrow="always" height="500px">
      <el-carousel-item v-for="(casurl, index) in imgCasURI" :key="index" arrow="always">
        <el-image :src="casurl"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>

  <!-- 清除浮动 -->
  <div style="clear: both;"></div>
 </div>
</template>

<script>
  export default{
    name: 'Navindex',
    data(){
      return{
        search_input: '',
        show: false,
        //显示左边的导航栏
        showRight: false,
       // 导航栏数组,对象数组
       navList:[
         {
           id:1,
           name: "小米10 青春版 5G",
          imgURL: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: 2999
         },
         {
           id:2,
           name: "小米10 PRO",
          imgURL: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: 4999
         },
         {
           id:3,
           name: "小米10",
          imgURL: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90",
          price: 3999
         },
         {
           id:4,
           name: "小米 CC9",
          imgURL: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110",
          price: 1499
         },
         {
           id:5,
           name: "小米 CC9e",
          imgURL: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110",
          price: 1299
         },
         {
           id:6,
           name: "小米CC9 美图版",
          imgURL: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=160&h=110",
          price: 1999
         }
        ],
        // 级联选择框的值
        options:[
          "手机 电话卡","电视 盒子","笔记本 显示器 平板","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳机 音响","生活 箱包"
        ],

        // 轮播图URI网址
        imgCasURI:[
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b60e10dd517a4cf61b7346dbb18c4f38.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0678749165e976e412a3ebdf9dca3d23.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81af1e9185643239867ef92970da305d.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0ebdee49c614a0ec438933982059053.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81af1e9185643239867ef92970da305d.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
        ],

        // 右边导航栏数据
        rightList: [
          {
            id: '001',
            name: "Redmi 10X 4G",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '002',
            name: "腾讯黑鲨游戏手机3 Pro",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '003',
            name: "Redmi 8",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '004',
            name: "小米CC9e",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '005',
            name: "小米 10 青春版",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '006',
            name: "小米 10",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          },
          {
            id:  '007',
            name: "小米9 5G+",
            URL: "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90"
          }
        ]
      }
    },
    created(){
    },
    methods:{

    // // 显示顶部导航栏
    showNav(){
      this.show = true
      var Nav = document.querySelector(".el-card")
        Nav.onmouseover = function(){
          this.show = true
        }

        Nav.onmouseleave= function(){
          this.show = false
        }
    },
    //  // 隐藏顶部导航栏
    // HideNav(){
    //   var Nav = document.querySelector("#donghua")
    //     Nav.style.height = "0"
    // },
    Closecascader(){
      var cas = document.querySelector(".cascader_hover")
      //cas.style.expandTrigger = 'click'
    }
  },
}
</script>

<style lang="less" scoped>
  #Navindex{
    margin: 0 auto;
    width: 1573px;

  }
  #donghua{
   // 绝对定位
   position: absolute;
   top: 138px;
   left: 0;
   z-index: 1;
   width: 100%;
  }

  .logo_mi{
    display: flex;
    align-items: center;
    background-color: #ff6700;
    height: 50px;
    width: 50px;
  }

  .el-menu{
    border: 0;
  }

  .el-submenu template {
    cursor: pointer;
    color: #000000  !important;
  }

  //动画初始化
  // 动漫进入之前，动画结束后的状态
  // .myNav-enter,
  // .myNav-leave-to{
  //   opacity: 0;
  // }

  // .myNav-enter-active,
  // .myNav-leave-active{
  //   transition: all 0.8s ease-in-out;
  // }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .myNav-enter-active {
    transition: all .3s ease;
  }
  .myNav-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .myNav-enter, .myNav-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-15%);
    opacity: 0;
  }

  .el-submenu:hover {
    cursor: pointer;
    color: #ff6700 !important;
  }
  #header-nav ul li{
    list-style: none;
    float: left;
    margin: 0px 10px;
  }


  #header-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #header-nav ul li a{
    text-decoration: none;
    color: #000000;
  }
  #header-nav ul li a:hover{
    color: #ff6700;
  }

  .input-with-select{
    width: 250px;
  }
  .cascader{
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .box-card{
    width: 100%;
    display: none;
    // z-index: 100;
  }

  .children_list{
    cursor: pointer;
  }
  .children_list ul li {
    padding-left: 20px;
    margin: 0 20px;
    list-style: none;
    float: left;
    border-right: 1px #EAFFEA solid;
  }
  .title{
    font-size: 5px;
  }
  .price{
    color: #ff6700;
    font-size: 3px;
  }


  .cascader{
    width: 234px;
    height: 500px;
    background-color: #a0a0a3;
    float: left;
  }

  .cascader ul li a{
    text-decoration: none;
    color: #FFFFFF;
  }

  .cascader ul {
    z-index: 100;
  }

  #leftList li:hover{
    background-color: #ff6700;
  }
  .cascader ul li{
    // display: flex;
    // justify-content: space-between;
    padding: 15px 20px;
    color: #FFFFFF;
    font-size: 15px;
  }
  .cascader ul li a{
    display: flex;
    justify-content: space-between;
    }
  .cascader ul li{
    list-style: none;
    cursor: pointer;
  }
  .content{
    margin: 20px 0;
    position: relative;
  }
  .content .el-card{
    z-index: 100;
    position: absolute;
    top:0;
    right: 0;
    height: 498px;
    width: 85%;
  }
  .el-carousel, .el-carousel .el-image{
    height: 500px;
    z-index: 0;
  }
  .el-carousel .el-image{
    width: 100%;
    height: 500px;
  }
   .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
      height: 500px;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
      height: 500px;
    }

    #rightListDiv ul li{
      float: left;
      list-style: none;
    }

    #rightListDiv ul li{
      display: flex;
      width: 250px;
      justify-content: space-between;
      align-content: center;
    }
    #rightListDiv ul li a{
      display: flex;
      align-items: center ;
    }
    #rightListDiv ul li .el-image{
      margin-right: 5px;
    }
    #rightListDiv ul li span:hover{
      color: #ff6700 !important;
    }

</style>
