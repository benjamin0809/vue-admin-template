<template>
  <section class="app-main">
  
    <el-scrollbar class="scrollbar-wrapper">
      <transition name="fade" mode="out-in">
        <!-- <router-view :key="key"></router-view> -->
        <router-view></router-view>
      </transition>
    </el-scrollbar>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;
  padding:10px
}
.scrollbar-wrapper {
      height: calc(100vh - 134px);
      overflow-x: hidden!important;
       
    }

.el-scrollbar__bar{
  z-index:999
}
</style>
