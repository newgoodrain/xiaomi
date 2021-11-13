<template>
  <div>
    <!-- 头部区域 -->
    <indexheader></indexheader>
    <!-- 导航栏 -->
    <Navindex></Navindex>
    <!-- 右边状态 -->
    <Navright></Navright>
    <Mindex></Mindex>
    <!-- 小米闪购 -->
    <mi_shangou></mi_shangou>
    <Footer></Footer>
    <!-- 底部区域模块 -->
    <Btn></Btn>
<!-- 
    返回顶部
    <el-backtop
    target=".page-component__scroll .el-scrollbar__wrap"
    :bottom="100"
    :visibility-height="100"
    > -->
    <!--  <div style="{
             height: 100%;
             width: 100%;
             background-color: #f2f5f6;
             box-shadow: 0 0 6px rgba(0,0,0, .12);
             text-align: center;
             line-height: 40px;
             color: #1989fa;
           }">
        UP
      </div> -->
 <!--     FF
    </el-backtop> -->
  </div>
</template>

<script>
  import Indexheader from './index/Indexheader.vue'
  import Navindex from './index/Navindex.vue'
  import Navright from './index/Navright.vue'
  import Mindex from './index/Mindex.vue'
  import Mi_shangou from './index/Mi_shangou.vue'
  import Footer from './index/Footer.vue'
  import Btn from './index/Btn.vue'
  export default {
    name: 'Myindex',
    components: {
      Indexheader,
      Navindex,
      Navright,
      Mindex,
      Mi_shangou,
      Footer,
      Btn
    },
  }
</script>

<style lang="less" scoped>

</style>
