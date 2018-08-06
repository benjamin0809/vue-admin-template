<template>
    <div class="padding">
        <el-table
    :data="list" 
    border
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="fileSize"
      label="文件大小"
      width="180">
    </el-table-column>
    <el-table-column
      prop="fullPath"
      label="路径">
    </el-table-column>
    <el-table-column
      prop="uploadTime"
      label="上传时间">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="viewFile(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import { getAttachmentList } from '@/api/attachment'

export default {
  data() {
    return {
      list: null,
      listLoading: false,
      multipleSelection: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getAttachmentList().then(res => {
        this.list = res.data
        console.log(res.data)
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    viewFile(row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>
    .padding{
        padding:10px
    }
</style>

