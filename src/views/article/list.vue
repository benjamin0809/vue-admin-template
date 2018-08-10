<template >
  <div class="list-container">
       <el-table :data="list" stripe style="width: 100%">
        <el-table-column prop="name" label="标题" width="180" @click="detail(scope.row)"> </el-table-column>
        <el-table-column prop="class" label="分类" width="180"> </el-table-column>
        <el-table-column prop="type" label="标签"> </el-table-column>
        <el-table-column prop="isTop" label="置顶"> </el-table-column>

        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="detail(scope.row)" type="primary" size="small">查看</el-button>
            <router-link to="/detail/123"><a>go</a></router-link>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list.push(storage.get('article'))
  },
  methods: {
    detail(row) {
      console.log(row)
      this.$route.to('/detail/' + row.title)
    }
  }
}
</script>
