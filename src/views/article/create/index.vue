<template>
  <div class="components-container"> 

       
      <el-form :model="articleForm" :rules="rules" ref="articleForm" label-width="100px" class="demo-articleForm">

      <el-form-item  >
        <div class="buttons padding">
        <el-button type="primary" @click="submitForm('articleForm')"  size="small"  >保存</el-button>  
        <el-button type="success" @click="submitForm('articleForm')"  size="small"   >发布</el-button>
      </div>
      </el-form-item>

      <el-form-item label="文章主题" prop="title">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="创建时间" prop="creationtime">
        <el-input v-model="articleForm.creationtime" :readonly="true"></el-input>
      </el-form-item>

      <el-form-item label="栏目" prop="tag">
        <el-select v-model="articleForm.tag" placeholder="请选择栏目">
          <el-option :label="item.name" :value="item.name" v-for="item  in column" :key="item.id"></el-option> 
        </el-select>
      </el-form-item>

      <el-form-item label="置顶" prop="istop">
        <el-switch v-model="articleForm.istop"></el-switch>
      </el-form-item>
      <el-form-item label="标签" prop="type">
         <dynamic-tag :dynamicTags="articleForm.type"></dynamic-tag>
      </el-form-item>
 
      <el-form-item label="正文" prop="content"> 
        <div class="editor-content">
          <tinymce :height="300" v-model="articleForm.content"></tinymce>
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
import article from '@/api/article'
import { parseTime } from '@/utils'
import { getArticleSubCol } from '@/utils/data'
import dynamicTag from '../components/dynamicTag'

export default {
  name: 'tinymce-demo',
  components: { Tinymce, dynamicTag },
  data() {
    return {
      content: '',
      column: getArticleSubCol(),
      articleForm: {
        title: '',
        tag: '',
        istop: false,
        type: [],
        content: '',
        creationtime: parseTime(new Date()),
        status: 0,
        remark: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 35, message: '长度在 3 到 35 个字符', trigger: 'blur' }
        ],
        tag: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        // type: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ],
        content: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const id = this.$route.params.articleid
    if (id) {
      article.getArticle(id).then(response => {
        console.log(response)
        response.data.type = response.data.type.split(',')
        this.articleForm = response.data
      })
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.articleForm.articleurl = location.href
          this.articleForm.istop = this.articleForm.istop ? 1 : 0
          this.articleForm.type = this.articleForm.type.toString()
          console.log(this.articleForm)
          article.saveArticle(this.articleForm).then(response => {
            if (response.errcode === 0) {
              this.articleForm.type = this.articleForm.type.split(',')
              this.$message('success')
            }
          })
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
.buttons{
  float:right; 
}
</style>


