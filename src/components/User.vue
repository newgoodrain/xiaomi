<template>
  <div id="login">
    <div id="Mi_img">
      <img src="https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png"
        title="小米官网" />
    </div>
    <div id="MIicon">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aece569d6689b4c461bb53efd9eea9c7.jpg" />
    </div>
    <div class="login_resigister">
      <div class="nav">
        <router-link to="/user/login"    @click.native="showLogin" tag="span" :class="{'nav_login' : true, 'active': isactive}">账号登录</router-link>
        <span style="color: #dfdfdf;">|</span>
        <router-link to="/user/register" @click.native="showReg"  tag="span" :class="{'nav_login' : true, 'active': erweima}">扫码登录</router-link>
        <!-- <span class="nav_reg">扫码登录</span> -->
      </div>
      <!-- 子路由替换的区域 -->
      <router-view></router-view>

    </div>
    <div id="footer">
      <ul>
        <li v-for="(item, index) of footList" :key="index">
          <a href="javascript:;">
            {{item}}
          </a>
          </li>
      </ul>
      <div style="clear: both;"></div>

    </div>
    <div id="info">
       <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        isactive: true,
        erweima: false,
        footList: [
          '简体',
          '|',
          '繁体',
           '|',
          'English',
           '|',
          '常见问题',
           '|',
          '隐私政策'
        ]
      }
    },
    methods: {
      showLogin() {
        this.isactive=true
        this.erweima=false
      },
      showReg(){
        this.isactive=false
        this.erweima=true
      }
    },
  }
</script>

<style lang="less" scoped>
  #login {
    position: relative;

  }

  #Mi_img img {
    width: 200px;
    height: 110px;
    margin-left: 200px;

  }

  #MIicon {
    position: absolute;
    top: 120px;
    left: -500px;
    height: 500px;
  }

  .login_resigister {
    width: 420px;
    height: 585px;
    background-color: #ffffff;
    position: absolute;
    top: 160px;
    left: 950px;
  }

  .nav {
    margin: 0 auto;
    margin: 40px 40px;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }

  .login_resigister span {
    font-size: 30px;
    font-weight: 300;
    cursor: pointer;
  }

  .active {
    color: #ff5500;
  }

  #footer{
    position: absolute;
    top: 750px;
    left: 500px;
  }
   #footer a{
     text-decoration: none;
     color: #000000;
   }
   
   #footer a:hover{
     text-decoration: none;
     color: #ff5500;
   }
 #footer li{
   list-style: none;
   float: left;
   margin-right:20px ;
 }
  #footer p{
    margin-left: 10px;
  }

  #info{
    position: absolute;
    top: 780px;
    left: 400px;
  }
</style>
