<template>
    <el-dialog :title="title" :visible.sync="dialogVisible" :modal="true" :before-close="close">
    <img v-if="isIamge" class="img-class" :src="imgsrc" />
    <a :href="imgsrc" v-else>download</a>
  <div slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="close">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
 
export default {
   props: {
     imgsrc: {
       type: String,
       default: 'static/img/timg.gif'
     },
     dialogVisible: {
       type: Boolean,
       default: false
     },
     isIamge: {
       type: Boolean,
       default: true
     }
   },
   data() {
     return {
       title: '照片查看'
     }
   },
   methods: {
     close() {
       this.$emit('CLOSE')
     }
   }

}
</script>

<style scoped>
    .img-class{
        width:100%;
        max-width: 680px;
    }
</style>



