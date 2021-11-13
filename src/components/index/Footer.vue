<template>
  <div id="footer">
    <div id="footer_content">
      <div id="content1">
        <div id="title">
          <h3>手机</h3>
          <div class="Right">
            <h4>查看全部
              <i class="el-icon-arrow-right"></i>

            </h4>
          </div>
        </div>
        <div id="img_group">
          <transition name="myphone">
            <div id="img_group1">
              <el-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90"></el-image>
            </div>
          </transition>
          <div id="img_group2">
            <!-- 上半部分 -->
            <ul>
              <li v-for="(item, index) of phoneList">
                <img v-bind:src="item.imgurl" />
                <p class="tel_name">{{item.name}}</p>
                <p class="tel_desc">{{item.desc}}</p>
                <p class="tel_price">
                  <span>{{item.price}}元</span>
                  <span>起</span>
                </p>
              </li>
            </ul>


          </div>
        </div>
      </div>

      <div style="clear: both;"></div>
      <div id="content2">
        <div id="title2">
          <h3>家电</h3>
          <div class="Right2">
            <h4>
              <span @mouseover="Hotshow()" @mouseleave="Hothide()" :class="  activeHot == 1 ? 'borderBottom':''">热门</span>

              <span @mouseover="Genalshow()" @mouseleave="Genalhide()" :class="  active == 1 ? 'borderBottom':''">电视影音</span>
            </h4>
          </div>
        </div>
        <div id="img_group3">
          <div id="img_group3_left">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4be972e972e9da983c222cfaa7f0b677.jpg?thumb=1&w=234&h=300&f=webp&q=90" />
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4be972e972e9da983c222cfaa7f0b677.jpg?thumb=1&w=234&h=300&f=webp&q=90" />
          </div>
          <div id="img_group3_right">
            <ul>
              <li v-for="(item, index) in Hot" :key="index">
                <img :src="item.imgurl" />
                <h3>{{item.title}}</h3>
                <p class="intro"> {{item.desc}}</p>
                <p>
                  <span>{{item.price}}元</span>
                  <del>{{item.price_del}}元</del>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style="clear: both;cursor: pointer;">
        <img width="100%" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/75d90015438db7eb80f4eb106e0684d3.jpg?thumb=1&w=1226&h=120&f=webp&q=90" />
      </div>
      <div id="content3">
        <div id="title3">
          <h3>搭配</h3>
          <div class="Right3">
            <h4>
              <span
              @mouseover="Remenshow()"
               :class="  remen == 1 ? 'borderBottom':''">热门</span>

              <span
               @mouseover="Erjishow()"
               :class="  erji == 1 ? 'borderBottom':''">耳机音响</span>
            </h4>
          </div>
        </div>
        <div id="img_group4">
          <div id="img_group4_left">
            <img v-for="(item, index) of img_left" :key="index" v-bind:src="item" />
          </div>
          <div id="img_group4_right">
            <ul>
              <li v-for="(item, index) in hotErji">
                <img v-bind:src="item.url" />
                <h3 class="name4">{{item.name}}</h3>
                <p class="desc4">{{item.desc}}</p>
                <p class="price4">
                  <span>{{item.price}}元</span>
                  <del>{{item.price_del}}</del>
                </p>
              </li>
             <li class="div_li" v-for="(item, index) of More">
                <div class="div_top">
                  <div>
                    <p>{{item.name}}</p>
                    <p>{{item.price}}</p>
                  </div>
                  <img v-bind:src="item.url" />
                </div>
                <div class="div_bottom">
                  <div>
                    <h2>浏览更多</h2>
                    <p>{{item.more}}</p>
                  </div>
                   <i class="el-icon-right"></i>
                </div>
            </li>
            </ul>
          </div>
        </div>
      </div>

      <div style="clear: both;"></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        // 手机列表
        phoneList: [{
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米10 青春版 5G',
            desc: '50倍潜望式变焦 / 轻薄5G手机',
            price: 2099
          }
        ],
        // 热门底边框样式
        activeHot: 1,
        // 普通底边框样式
        active: 0,

        // 计算机属性
        a: 1,
        b: 1,
        // 热门电视数组
        hotList: [{
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          },
          {
            imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
            title: '米家空调',
            desc: '出众静音，快速制冷热',
            price: 1499,
            price_del: 1999
          }
        ],
        //普通电视
        genList: [{
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          },
          {
            imgurl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            title: 'Redmi 红米电视 70英寸 ',
            desc: '70英寸震撼巨屏，4K画质，细腻如真',
            price: 2999,
            price_del: 3799
          }
        ],
        // 搭配照片
        img_left: [
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?thumb=1&w=234&h=300&f=webp&q=90',
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a00bdd568dbc2b02f8fe0fa8d1b46f28.jpg?thumb=1&w=234&h=300&f=webp&q=90'
        ],

        // 热门音响耳机下边框
        remen:1,
        erji:0,
        // 热门耳机数据
        remenList:[
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米真无线蓝牙耳机 Air 2',
            desc: '智能真无线，轻松舒适戴',
            price: '299',
            price_del: '399元'
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米真无线蓝牙耳机 Air 2',
            desc: '智能真无线，轻松舒适戴',
            price: '299',
            price_del: '399元'
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50649d7b5706f4cd9f658e93db6b6564.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '小米真无线蓝牙耳机 Air 2',
            desc: '智能真无线，轻松舒适戴',
            price: '299',
            price_del: '399元'
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '高速无线充套装',
            desc: '快速无线闪充，Qi充电标准',
            price: '149',
            price_del: ''
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '高速无线充套装',
            desc: '快速无线闪充，Qi充电标准',
            price: '149',
            price_del: ''
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '高速无线充套装',
            desc: '快速无线闪充，Qi充电标准',
            price: '149',
            price_del: ''
          },
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: '高速无线充套装',
            desc: '快速无线闪充，Qi充电标准',
            price: '149',
            price_del: ''
          }
        ],
        erjiList:[
          {
            url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=200&h=200&f=webp&q=90',
            name: 'Redmi充电宝 10000mAh 标准版 白色',
            desc: '10000mAh大电量 ',
            price: '59',
            price_del: ''
          },
         {
           url:'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg',
           name: '小米插线板 5孔位',
           desc: '多重安全保护',
           price: '39',
           price_del: ''
         },
         {
           url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200',
           name: '小米小爱蓝牙音箱 随身版',
           desc: '小巧便携，一键唤醒小爱',
           price: '49',
           price_del: ''
         },
         {
           url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=200&h=200&f=webp&q=90',
           name: 'Redmi充电宝 10000mAh 标准版 白色',
           desc: '10000mAh大电量 ',
           price: '59',
           price_del: ''
         },
         {
           url:'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925!200x200.jpg',
           name: '小米蓝牙耳机AirDots青春版',
           desc: '雅致简约，收纳充电盒',
           price: '199',
           price_del: ''
         },
         {
           url:'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg',
           name: '小米插线板 5孔位',
           desc: '多重安全保护',
           price: '39',
           price_del: ''
         },
         {
           url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200',
           name: '小米小爱蓝牙音箱 随身版',
           desc: '小巧便携，一键唤醒小爱',
           price: '49',
           price_del: ''
         }
        ],
        remenRightBottom:[
          {
            url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=100&h=100&f=webp&q=90',
            name:'小米小爱触屏音箱',
            price: '179元',
            more: '热门'
          }
        ],
        genalRightBottom:[
          {
            url: 'https://i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK!100x100.jpg',
            name:'小米随身蓝牙音箱',
            price: '69元',
            more: '耳机音响'
          }
        ]
      }
    },
    // 计算属性，监听数据变化
    computed: {
      Hot: function() {
        if (this.a === 1) {
          return this.hotList
        } else {
          return this.genList
        }
      },
      hotErji: function(){
        if(this.b === 1){
          return this.remenList
        }else{
          return this.erjiList
        }
      },
      More: function(){
        if(this.b === 1){
          return this.remenRightBottom
        }else{
          return this.genalRightBottom
        }
      }
    },
    created() {

    },

    methods: {
      // 热门电视显示与隐藏
      Hotshow() {
        this.hot = true
        this.viedo = false
        this.activeHot = 1
        this.active = 0
        // 监听值
        this.a = 1
      },
      Hothide() {
        this.hot = true
        this.activeHot = 1
      },
      // 普通电视显示与隐藏
      Genalshow() {
        this.viedo = true
        this.hot = false
        this.active = 0
        this.activeHot = 0
        this.a = 0
      },
      Genalhide() {
        this.viedo = true
        this.active = 1
      },
      // 热门耳机显示下边框
      Remenshow(){
         this.remen = 1
         this.erji = 0
         // 监听值
         this.b = 1
      },
      // 普通耳机显示下边框
      Erjishow(){
         this.remen = 0
         this.erji = 1
         // 监听值
         this.b = 0
      }

    }
  }
</script>

<style lang="less" scoped>
  #footer {
    margin: 0 auto;
    background-color: #f5f5f5;
  }

  #footer_content {
    width: 1580px;
    margin: 0 auto;
    // background-color: #000000;
  }

  #title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-content: center;
  }

  #title h3 {
    font-size: 30px;
    font-weight: 300;
  }

  .Right:hover {
    cursor: pointer;
    color: #ff9a55;

  }

  .el-icon-arrow-right:hover {
    background-color: #f87300 !important;
  }

  #title h4 {
    font-size: 18px;
    font-weight: 300;
  }

  #title h4 i {
    background-color: #d3d3d3;
    color: #F5F2F0;
    font-size: 20px;
    padding: 3px;
    border-radius: 50%;
  }

  #img_group1 {
    float: left;
  }


  #img_group2 ul li {
    list-style: none;
    float: left;
    height: 300px;
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 75px;
    margin-bottom: 14px;
    background-color: #FFFFFF;
  }

  .tel_desc {
    color: #e3e3e3;
    font-size: 15px;
  }

  .tel_price {
    color: #f87300;
  }

  #img_group1 {
    height: 616px;
    width: 236px;

  }

  //  #img_group1,.el-image{
  //   height: 614px;
  //   width: 234px;
  // }
  .el-image,
  #img_group2 ul li {
    cursor: pointer;
  }

  #img_group1 .el-image {
    transition: transform .5s;
    -moz-transition: transform 1s;
    /* Firefox 4 */
    -webkit-transition: transform 1s;
    /* Safari and Chrome */
    -o-transition: transform 1s;
    /* Opera */
  }

  #img_group1 .el-image:hover {
    // transform: translateY(-10px);
    // padding: 0px 5px;
    transform: translateY(-5px);
    width: 234px; //原本宽234
    height: 614px; //原本高614
    box-shadow: 10px 10px 15px #c3c3c3;
  }

  #img_group2 ul li:hover {
    transform: translateY(-5px);
    box-shadow: 10px 10px 15px #b0b0b0;
  }

  #img_group2 ul li {
    transition: transform .5s;
  }

  #content2 #img_group3_right ul li {
    list-style: none;
    float: left;
    height: 300px;
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #FFFFFF;
  }

  #content2 #title2 {
    display: flex;
    justify-content: space-between;
  }

  #content2 #title2 h3 {
    font-size: 35px;
    font-weight: 100;
  }

  #content2 #title2 span {
    font-size: 20px;
    font-weight: 200;
    margin-left: 30px;

  }

  #content2 {
    margin: 20px 0px 0px 0px;

  }

  #img_group3_left {
    float: left;
  }

  #img_group3_left img {
    height: 300px;
    width: 234px;
    display: block;
    margin-bottom: 20px;
    transition: transform .5s;
  }

  #img_group3_left img:hover {
    box-shadow: 10px 10px 15px #bcbcbc;
    transform: translateY(-5px);
    cursor: pointer;
  }

  #img_group3_right img {
    height: 300px;
    width: 234px;
  }



  #content2 #title2 span:hover {
    cursor: pointer;
    color: #f87300;
    border-bottom: 3px solid #f87300;
  }

  #img_group3_right ul li {
    height: 300px;
    width: 260px;
    margin-left: 75px;
    margin-bottom: 20px;
    transition: transform .5s;
  }

  #img_group3_right ul li:hover {
    box-shadow: 10px 10px 15px #cfcfcf;
    transform: translateY(-10px);
    cursor: pointer;
  }

  #img_group3_right ul li h3 {
    font-weight: 300;
    font-size: 18px;
  }

  #img_group3_right ul li .intro {
    color: #d8d8d8;
    font-size: 14px;
  }

  #img_group3_right ul li del {
    color: #d8d8d8;
    margin-left: 8px;
  }

  #img_group3_right ul li span {
    color: #ff5500;
  }

  .borderBottom {
    cursor: pointer;
    color: #f87300;
    border-bottom: 3px solid #f87300;
  }

  #content3{
    margin: 10px 0px;
  }
  #content3 #title3 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  #content3 #title3 h3 {
    font-size: 35px;
    font-weight: 200;
  }

  #content3 .Right3 span {
    font-size: 20px;
    font-weight: 200;
    margin-left: 30px;
  }
  #content3 .Right3 span:hover{
    cursor: pointer;
  }

  #img_group4_left img {
    display: block;
    margin-bottom: 30px;
    width: 234px;
    height: 300px;

  }
  #img_group4_left{
   float: left;
 }
  #img_group4_left img:hover{
    cursor: pointer;
    transform: translateY(-8px);
    transition: transform .5s;
    box-shadow: 10px 10px 15px #b3b3b3;

  }
 #img_group4_right ul li{
   list-style: none;
   width: 260px;
   height: 300px;
   background-color: #FFFFFF;
   margin-bottom: 30px;
   float: left;
   margin-left: 75px;
   display: flex;
   flex-direction: column;
  justify-content: space-around;
  align-items: center;
 }
  #img_group4_right ul li:hover{
    cursor: pointer;
    transform: translateY(-8px);
    transition: transform .5s;
    box-shadow: 10px 10px 15px #afafaf;
  }
 #img_group4_right .name4{
   font-weight: 500;
 }
 #img_group4_right .desc4{
   color: #b9b9b9;
 }
 #img_group4_right .price4 del{
   color: #b9b9b9;
   margin-left: 10px;
 }
 #img_group4_right .price4 span{
   color: #ff5500;
 }


 #img_group4_right div1_2{
  background-color: #000000 !important;
 }
  .div_li{
   width: 260px;
   height: 140px;
   background-color: #f5f5f5 !important;
 }
 .div_li .div_top{
   width: 260px;
   height: 140px;
   background-color: #FFFFFF;
 }
 #img_group4_right li:hover{
   cursor: pointer;
   transform: translateY(-8px);
   transition: transform .5s;
   box-shadow: 10px 10px 15px #afafaf !important;
 }
 .div_li .div_bottom{
   width: 260px;
   height: 140px;
   background-color: #FFFFFF;
 }
 .div_li .div_bottom:hover{
   cursor: pointer;
   transform: translateY(8px);
   transition: transform .5s;
   box-shadow: 10px 10px 15px #afafaf !important;
 }
 .div_top{
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .div_li .div_top:hover{
   cursor: pointer;
   transform: translateY(-8px);
   transition: transform .5s;
   box-shadow: 10px 10px 15px #afafaf !important;
 }
 .div_top div p:first-child{
   font-size: 20px;
 }
 .div_top div p:last-child{
   color: #ff5500;
   font-size: 18px;
 }
 .div_bottom{
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .div_bottom i{
   color: #ff5500;
   font-size: 50px;
   border: 3px #ff5500 solid;
   border-radius: 50%;
 }
 .div_bottom h2{
   font-weight: 520;
   font-size: 25px;

 }
</style>
