<template>
  <div>
    <div class="z_input">
      <div class="pre">
        +86
      </div>
      <input class="pre_input" type="text" value="" placeholder="手机号码" />
      <input class="sub_input" type="password" value="" placeholder="验证码" id="yan" />
      <div class="sub">
        获取验证码
      </div>
      <input type="button" value="立刻登录/注册" id="btn" />
    </div>
    <div id="bottom_foot">
      <router-link to="/user/login" tag="span">手机密码登录</router-link>
      <div>
        <a href="javascript:;">收不到验证码？</a>

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
  * {
    margin: 0;
    padding: 0;
  }

  .z_input input {
    position: relative;
    width: 320px;
    height: 50px;
    margin: 5px 40px;
    padding: 0 10px;
    border: 1px solid #b8b8b8;
    outline: none; //去掉点击边框
    cursor: default;
  }

  .pre_input {
    width: 260px !important;
    float: right;
  }

  #yan {
    margin: 20px 40px;
  }

  #btn {
    background-color: #ff6700;
    color: #FFFFFF;
    font-size: 16px;
    width: 340px !important;
    cursor: pointer;
  }

  .pre {
    border: 1px solid #acacac;
    width: 57px;
    height: 50px;
    position: absolute;
    top: 125px;
    left: 40px;
    text-align: center;
    line-height: 50px;
    color: #c1c1c1;
  }

  .sub_input{
    width: 237px !important;
  }
  .sub{
    border: 1px solid #acacac;
    width:80px;
    height: 50px;
    position: absolute;
    top: 202px;
    right: 40px;
    text-align: center;
    line-height: 50px;
    font-size: 10px;
    cursor: pointer;
  }
  #bottom_foot{
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
  }
  #bottom_foot span{
    color: #ff5500;
    font-size: 15px;
    cursor: pointer;
  }
  #bottom_foot a{
    text-decoration: none;
    color: #c2c2c2;
    font-size: 15px;
    margin-right: 5px;
  }
   #bottom_foot a:hover{
      color: #ff5500;

   }
  #other fieldset {
    margin: 80px 40px;
  }
  #other fieldset legend{
    text-align: center;
  
  }
</style>
