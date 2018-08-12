<template >
  <div class="list-container">
       <el-table :data="list" stripe style="width: 100%">
        <el-table-column prop="title" label="标题" width="180" >
          <template slot-scope="scope">
            <router-link class="link-type" :to="'/article/detail/' + scope.row.id">
              <span>{{ scope.row.title }}</span>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="class" label="分类" width="180"> </el-table-column>
        <el-table-column prop="type" label="标签"> </el-table-column>
        <el-table-column prop="isTop" label="置顶"> </el-table-column>

        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope"> 
            <router-link  :to="'/article/edit/' + scope.row.id" >
              <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
              </router-link>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getNewslist } from '@/utils/data'
import article from '@/api/article'

export default {
  data() {
    return {
      list: getNewslist()
    }
  },
  created() {
    article.list().then(response => {
      this.list = response.data
    })
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
  .link-type{
    text-decoration: underline;
    color:blue
  }
</style>

