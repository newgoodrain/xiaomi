<template>
  <div id="content">
    <div class="nav_input">
      <input type="text" value="" placeholder="邮箱/手机号码/小米ID" />
      <input type="password" value="" placeholder="密码" id="pwd" />
      <input type="button" value="登录" id="btn" />
    </div>
    <div id="login">
      <router-link to="/user/zhuce" tag="span">手机短信登录/注册</router-link>
      <div>
        <a href="javascript:;">立即注册</a>
        <a href="javascript:;">|</a>
        <a href="javascript:;">忘记密码？</a>
      </div>
    </div>

    <div id="other">
      <fieldset>
        <legend>其他方式登录</legend>

        <div id="jinglingtu">

        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .nav_input input {
    width: 320px;
    height: 50px;
    margin: 5px 40px;
    padding: 0 10px;
    border: 1px solid #b8b8b8;
    outline: none; //去掉点击边框
    cursor: default;
  }

  #pwd {
    margin: 20px 40px;
  }

  #btn {
    background-color: #ff6700;
    color: #FFFFFF;
    font-size: 16px;
    width: 340px !important;
  }

  #login span{
    cursor: pointer;
    color: #ff5500;
    font-size: 15px;
  }
  #login{
    display: flex;
    justify-content: space-around;
  }

   #login a{
     text-decoration: none;
     color: #c2c2c2;
     font-size: 15px;
     margin-right: 5px;
   }
    #login a:hover{
       color: #ff5500;

    }
    #other fieldset {
      margin: 80px 40px;
    }
    #other fieldset legend{
      text-align: center;

    }

 
     #other li {
       list-style: none;

     }
</style>
