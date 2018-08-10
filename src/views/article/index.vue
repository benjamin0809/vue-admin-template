<template >
  <div class="article-container">
      <p>article:{{articleid}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleid: this.$route.params.articleid
    }
  }
}
</script>
