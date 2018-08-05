<template>
  <div class="dashboard-container">
    <img src='static/img/timg.gif' style="width:60px;margin:auto"/>
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>

    <el-radio v-model="radio" label="1">
     <img src='static/img/avatar/avatar1.jpg' style="width:100px;margin:auto"/>
    </el-radio>
    <el-radio v-model="radio" label="2">
      <img src='static/img/avatar/avatar2.jpg' style="width:100px;margin:auto"/>
    </el-radio>
    <el-radio v-model="radio" label="3">
      <img src='static/img/avatar/avatar3.jpg' style="width:100px;margin:auto"/>
    </el-radio>
    <el-radio v-model="radio" label="4">
      <img src='static/img/avatar/avatar4.jpg' style="width:100px;margin:auto"/>
    </el-radio>
    

    <uploadImage></uploadImage>
    <el-carousel indicator-position="outside">
     <el-carousel-item v-for="(item,index) in slideArray" :key="index" style="margin:auto">
       <img :src='item.url' style="width:100%;margin:auto"/>
     </el-carousel-item>
   </el-carousel>
 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import uploadImage from '@/components/upload'
export default {
  name: 'dashboard',
  components: {
    uploadImage
  },
  data() {
    return {
      radio: '1',
      slideArray: [{ url: 'static/img/slide/slide1.jpg' }, { url: 'static/img/slide/slide2.jpg' },
        { url: 'static/img/slide/slide3.jpg' },
        { url: 'static/img/slide/slide4.jpg' }]

    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

  
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } 
</style>

 