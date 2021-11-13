<template>
  <div id="footer">
    <div id="content">
      <div style="cursor: pointer;" v-for="(item, index) of ImgUrl" :key="index">
        <img width="100%" :src="item" />
      </div>

      <!-- 视频区域 -->
      <div id="dvd">
        <div>
          <h2>视频</h2>
          <a href="#">
            <p>查看全部 <i class="el-icon-arrow-right"></i></p>
          </a>
        </div>
        <ul>
          <li v-for="item of vdList" :key="item.id" @click="PlayDVD(item.id)">
            <i class="el-icon-video-play"></i>
            <img :src="item.igurl" />
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
          </li>
        </ul>
      </div>
      <!-- 视频弹窗区域 -->
      <el-dialog v-for="(item) of videoList" :visible.sync="dvdDialogshow" width="50%">
        <div>
          <h2>
            {{item.title}}
          </h2>
          <span @click="dvdDialogshow = false,videoID = 5">X</span>
        </div>
        <video class="vdstyle" :src="item.vdURL" controls="controls" :autoplay="play">
          您的浏览器不支持 video 标签。
        </video>
      </el-dialog>


    </div>
    <!-- 底部版权 -->
    <div class="footerBtn">
      <div class="footerBtnC">
        <ul>
          <li><a href="#"><i class="iconfont icon-weixiu"></i>预约维修服务</a></li>
          <li><span>|</span></li>
          <li><a href="#"><i class="iconfont icon-icon-test1"></i>7天无理由退货</a></li>
          <li><span>|</span></li>
          <li><a href="#"><i class="iconfont icon-icon-test"></i>15天免费换货</a></li>
          <li><span>|</span></li>
          <li><a href="#"><i class="iconfont icon-liwuhe"></i>满99元包邮</a></li>
          <li><span>|</span></li>
          <li><a href="#"><i class="iconfont icon-position"></i>520余家售后网点</a></li>
        </ul>
        <hr style="color: #e2e2e2;">
        <div class="div_dl">
          <dl>
            <dt>帮助中心</dt>
            <dd><a href="#">账号管理 </a></dd>
            <dd><a href="#">购物指南 </a></dd>
            <dd><a href="#">订单操作 </a></dd>
          </dl>

          <dl>
            <dt>服务支持</dt>
            <dd><a href="#">售后政策 </a></dd>
            <dd><a href="#">自助服务 </a></dd>
            <dd><a href="#">相关下载 </a></dd>
          </dl>

          <dl>
            <dt>线下门店</dt>
            <dd><a href="#">小米之家 </a></dd>
            <dd><a href="#">服务网点 </a></dd>
            <dd><a href="#">授权体验店 </a></dd>
          </dl>

          <dl>
            <dt>关注小米</dt>
            <dd><a href="#">了解小米 </a></dd>
            <dd><a href="#">加入小米 </a></dd>
            <dd><a href="#">投资者关系 </a></dd>
            <dd><a href="#">企业社会责任 </a></dd>
            <dd><a href="#">廉洁举报 </a></dd>
          </dl>

          <dl>
            <dt>关注我们</dt>
            <dd><a href="#">新浪微博 </a></dd>
            <dd><a href="#">官方微信 </a></dd>
            <dd><a href="#">联系我们 </a></dd>
            <dd><a href="#">公益基金会 </a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">F码通道 </a></dd>
            <dd><a href="#">礼物码 </a></dd>
            <dd><a href="#">防伪查询 </a></dd>
          </dl>
          <dl class="tel_info">
            <dt>400-100-5678</dt>
            <dd><a href="#">8:00-18:00（仅收市话费） </a></dd>
            <dd><a href="#">购物指南 </a></dd>
            <dd><a href="#">关注小米 </a></dd>
          </dl>
        </div>

        <div class="spanDIV">
          <span><a href="#">小米商场</a></span><span>|</span>
          <span><a href="#">MIUI</a></span><span>|</span>
          <span><a href="#">米家</a></span><span>|</span>
          <span><a href="#">米聊</a></span><span>|</span>
          <span><a href="#">多看</a></span><span>|</span>
          <span><a href="#">游戏</a></span><span>|</span>
          <span><a href="#">政企服务</a></span><span>|</span>
          <span><a href="#">小米天猫店</a></span><span>|</span>
          <span><a href="#">小米集团隐私政策</a></span><span>|</span>
          <span><a href="#">小米公司儿童信息保护规则</a></span><span>|</span>
          <span><a href="#">小米商城隐私政策</a></span><span>|</span>
          <span><a href="#">小米商城用户协议</a></span><span>|</span>
          <span><a href="#">问题反馈</a></span><span>|</span>
          <span><a href="#">Select Location</a></span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Btn',
    data() {
      return {
        ImgUrl: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90'
        ],
        vdList: [{
            id: 1,
            igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90',
            title: 'Redmi 10X系列发布会',
            desc: 'Redmi 10X系列发布会'
          },
          {
            id: 2,
            igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90',
            title: '小米10 青春版 发布会',
            desc: ''
          },
          {
            id: 3,
            igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90',
            title: '小米10 8K手机拍大片',
            desc: ''
          },
          {
            id: 4,
            igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=296&h=180&f=webp&q=90',
            title: '小米10发布会',
            desc: ''
          }
        ],
        // 控制弹窗区域
        dvdDialogshow: false,
        // 监听值
        videoID: 0,
        vdL1: [{
          id: '01',
          igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          vdURL: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',
          title: 'Redmi 10X系列发布会',
          desc: 'Redmi 10X系列发布会'
        }, ],
        vdL2: [{
          id: '02',
          igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          vdURL: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',
          title: '小米10 青春版 发布会',
          desc: 'Redmi 10X系列发布会'
        }, ],
        vdL3: [{
          id: '03',
          igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          vdURL: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',
          title: '小米10 8K手机拍大片',
        }, ],
        vdL4: [{
          id: '04',
          igurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=296&h=180&f=webp&q=90',
          vdURL: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4',
          title: '小米10发布会',
        }, ],
        vdL5:[],
        // 控制是否自动播放
        play: true
      }
    },
    // 计算属性
    computed: {
      videoList: function() {
        if (this.videoID === 1) {
          return this.vdL1
        }
        if (this.videoID === 2) {
          return this.vdL2
        }
        if (this.videoID === 3) {
          return this.vdL3
        }
        if (this.videoID === 4) {
          return this.vdL4
        }

        if (this.videoID === 5) {
          return this.vdL5
        }

      }
    },
    created() {

    },
    methods: {
      // 视频播放函数
      PlayDVD(id) {
        this.dvdDialogshow = true
        this.videoID = id
      }
    }
  }
</script>

<style lang="less" scoped>
  #footer {
    background-color: #f5f5f5;
    height: 300px;
  }

  #content, .footerBtnC {
    width: 1580px;
    margin: 0 auto;
  }

  #dvd ul {
    display: flex;
    justify-content: space-between;
  }

  #dvd div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 20px 0;
  }

  #dvd div h2 {
    font-size: 35px;
    font-weight: 300;
  }

  #dvd div p {
    font-size: 20px;
    font-weight: 300;
  }

  #dvd div p:hover {
    color: #ff5500 !important;
    cursor: pointer;
  }

  #dvd div i:hover {
    background-color: #ff5500;
    cursor: pointer;
  }


  #dvd div i {
    font-size: 20px;
    border-radius: 50%;
    padding: 5px;
    background-color: #a6a6a6;
    color: #FFFFFF;
  }
  #dvd a{
    text-decoration: none;
    color: #000000;
  }
  #dvd a:hover{

    color: #ff5500;
  }
  #dvd ul li {
    list-style: none;
    float: left;
    width: 380px;
    height: 320px;
    background-color: #FFFFFF;
    position: relative;
  }

  #dvd ul li i {
    position: absolute;
    color: #ffffff;
    font-size: 40px;
    top: 180px;
    left: 20px;
  }

  #dvd ul li:hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: transform .5s;
    box-shadow: 10px 10px 15px #b6b6b6;
  }

  #dvd ul li i:hover {
    background-color: #ff5500;
    border-radius: 50%;
  }

  #dvd ul li img {
    width: 100%;
  }

  .title {
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
  }

  .desc {
    margin-top: 5px;
    text-align: center;
    color: #c6c6c6;
  }

  // 父类设置相对定位
  // 子类设置相对定位。子类可以把元素放在父类的任何位置
  .el-dialog {
    position: relative;
    background-color: #FFFDEF;
    width: 100px;
    height: 400px;
  }

  .el-dialog div {
    z-index: 100;
    width: 100%;
    height: 50px;
    background-color: #c5c5c5;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-dialog div h2 {
    font-size: 25px;
    margin-left: 20px;
  }

  .el-dialog div span {
    font-size: 25px;
    margin-right: 20px;
    padding: 5px;

  }

  .el-dialog div span:hover {
    cursor: pointer;
    background-color: #ff5500;
    padding: 5px;
    border-radius: 50%;
  }

  .vdstyle {
    width: 100%;
    height: 500px;
  }

 .footerBtn{
   margin-top: 40px;
   background-color: #ffffff;
   // height: 1200px;
 }
 .footerBtnC ul{
   display: flex;
  justify-content: space-around;
  align-items: center;
 }
 .footerBtnC ul li{
   list-style: none;
   display: inline;
   margin: 20px 10px;

 }

 .footerBtnC ul li a{
   text-decoration: none;
   color: #000000;
   font-size: 25px;
   font-weight: 200;
   display: flex;
   padding: 10px;
   // border-right: solid 1px #b6b6b6;
 }

  .footerBtnC ul li a:hover{
    color: #ff5500 !important;
  }
 .footerBtnC ul li a i{
   font-size: 32px;
   margin-right: 10px;
 }

 .div_dl{
   display: flex;
   justify-content: space-between;
   margin-top: 50px;
 }
 .div_dl dt{
   margin-bottom: 50px;
   font-size: 20px;
 }
 .div_dl dd{
   margin-bottom: 10px;
   font-size: 15px;
 }
 .div_dl a,
 .tel_info dd{
 text-decoration: none;
 color: #a3a3a3;
 }

 .div_dl a:hover{
 text-decoration: none;
 color: #ff5500;
 }

.spanDIV {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
}
 .spanDIV a{
  text-decoration: none;
  color: #000000;
 }
 .spanDIV a:hover{
  text-decoration: none;
  color: #ff5500;
 }
</style>
