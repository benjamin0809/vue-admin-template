<template >
  <div class="article-container">

    <el-card class="box-card">
      <h1>{{article.title}}</h1>
      <el-tag :key="tag" v-for="tag in article.type"   :disable-transitions="false" >
      {{tag}}
    </el-tag>
      <p>{{article.editor}}</p>
      <p>{{article.publishtime}}</p>
      <div v-html="article.content"></div>
    </el-card>

 
  </div>
</template>

<script>
import article from '@/api/article'
import { getNewsById } from '@/utils/data'
export default {
  data() {
    return {
      article: getNewsById(this.$route.params.articleid)
    }
  }, created() {
    const id = this.$route.params.articleid

    article.getArticle(id).then(response => {
      if (response.errcode === 0) {
        response.data.type = response.data.type.split(',')
        this.article = response.data
      }
    })

    console.log(this.article)
  }
}
</script>
<style scoped>
  .article-container {
    text-align: center;
    padding:10px;
  }
</style>

