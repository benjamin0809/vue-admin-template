<template>
  <div class="components-container"> 

      <el-form :model="articleForm" :rules="rules" ref="articleForm" label-width="100px" class="demo-articleForm">
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
      <el-form-item label="置顶" prop="istop">
        <el-switch v-model="articleForm.istop"></el-switch>
      </el-form-item>
      <el-form-item label="标签" prop="type">
        <el-checkbox-group v-model="articleForm.type">
          <el-checkbox label="即时新闻" name="type"></el-checkbox>
          <el-checkbox label="通知" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
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
export default {
  name: 'tinymce-demo',
  components: { Tinymce },
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
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
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
          this.articleForm.creationtime = parseTime(new Date())
          this.articleForm.articleurl = location.href
          this.articleForm.istop = this.articleForm.istop ? 1 : 0
          this.articleForm.type = this.articleForm.type
          console.log(this.articleForm)
          article.createArticle(this.articleForm).then(response => {
            if (response.errcode === 0) {
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
</style>


