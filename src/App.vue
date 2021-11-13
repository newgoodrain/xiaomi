<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  },
}
</script>

<style>
	/* 引入阿里巴巴图库 */
@import './assets/css/iconfont/iconfont.css';

</style>
