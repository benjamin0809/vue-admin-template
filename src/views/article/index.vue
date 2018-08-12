<template >
  <div class="article-container">

    <el-card class="box-card">
      <h1>{{article.title}}</h1>
      <p>{{article.editor}}</p>
      <p>{{article.class}}</p>
      <div v-html="article.content"></div>
    </el-card>

 
  </div>
</template>

<script>
import article from '@/api/article'
export default {
  data() {
    return {
      article: {}
    }
  }, created() {
    const id = this.$route.params.articleid

    article.getArticle(id).then(response => {
      if (response.errcode === 0) {
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

