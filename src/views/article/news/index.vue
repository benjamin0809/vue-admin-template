<template>
  <div class="components-container"> 

      <el-form :model="articleForm" :rules="rules" ref="articleForm" label-width="100px" class="demo-articleForm">
      <el-form-item label="文章主题" prop="name">
        <el-input v-model="articleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="class">
        <el-select v-model="articleForm.class" placeholder="请选择文章分类">
          <el-option label="新闻" value="news"></el-option>
          <el-option label="公告" value="notice"></el-option>
        </el-select>
      </el-form-item>
      <!--<el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="articleForm.date1" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="articleForm.date2" style="width: 100%"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>-->
      <el-form-item label="置顶" prop="isTop">
        <el-switch v-model="articleForm.isTop"></el-switch>
      </el-form-item>
      <el-form-item label="标签" prop="type">
        <el-checkbox-group v-model="articleForm.type">
          <el-checkbox label="即时新闻" name="type"></el-checkbox>
          <el-checkbox label="通知" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
 
      <el-form-item label="正文" prop="desc"> 
        <div class="editor-content">
          <tinymce :height="300" v-model="articleForm.desc"></tinymce>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('articleForm')">立即创建</el-button>
        <el-button @click="resetForm('articleForm')">重置</el-button>
      </el-form-item>
    </el-form>

      
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import storage from '@/utils/storage'
export default {
  name: 'tinymce-demo',
  components: { Tinymce },
  data() {
    return {
      content: '',
      articleForm: {
        name: '',
        class: '',
        isTop: false,
        type: [],
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.articleForm)

          storage.set('article', this.articleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.components-container{
  padding:20px
}
.editor-content{
  margin-top: 20px
}
</style>


