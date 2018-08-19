<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="search padding">
          <el-input placeholder="请输入内容" v-model="listQuery.title" clearable class="input-with-select">
            <el-select v-model="searchSelect" slot="prepend" placeholder="请选择" class="el-select">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
            </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
          
        </div>
        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <div class="buttons padding">
          <el-button type="danger" @click="deleteFiles" :disabled="!deleteButton" icon="el-icon-delete"></el-button> 
          <!-- <el-button type="primary"><i class="el-icon-upload el-icon--right"></i></el-button> -->

          <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"></editorImage>
        </div>
         
        </div>
      </el-col>
    </el-row>

    <div class="padding table">
    <el-scrollbar class="scrollbar-wrapper">
      <el-table :data="paginateList"  border style="width: 100%;height:700px" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="fileName" label="名称" width="180"> </el-table-column>
        <el-table-column prop="fileSize" label="文件大小" width="180"> </el-table-column>
        <el-table-column prop="fullPath" label="路径"> </el-table-column>
        <el-table-column prop="uploadTime" label="上传时间"> </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="viewFile(scope.row)" type="primary" size="small">查看</el-button>
            <el-button @click="deleteFile(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </el-scrollbar>
    </div>

    <div class="pagination-container"> 
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.currengPage" :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="filerList.length">
      </el-pagination> 
    </div>

    <ImagePreview :imgsrc="previewimg" :dialogVisible="dialogVisible" :isIamge="isImg" @CLOSE="closePreview" />
  </div>
</template>

<script>
import { getAttachmentList, deleteAttachmentById } from '@/api/attachment'
import editorImage from '@/components/upload/components/editorImage'
import ImagePreview from '@/components/upload/components/ImagePreview'
import { isImg } from '@/utils'
export default {
  components: { editorImage, ImagePreview },
  data() {
    return {
      list: [{ uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img.jpg', fileSize: 512, fileName: 'wenjian' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian1' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian2' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian3' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian4' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian5' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian6' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian7' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian8' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian9' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian10' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian11' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian12' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian13' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian14' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian15' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian16' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian17' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian18' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian19' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian20' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian21' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian22' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian23' },
        { uploadTime: '2018-08-07 14:24:36', fullPath: '/doc/img1.jpg', fileSize: 5121, fileName: 'wenjian24' }],
      listLoading: false,
      multipleSelection: null,
      deleteButton: false,
      searchSelect: '',
      listQuery: {
        currengPage: 1,
        title: '',
        limit: 10
      },
      previewimg: '',
      dialogVisible: false
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    searchOption: (newvalue, oldvalue) => {
      console.log(`search is change newvalue is ${newvalue} , oldvalue id ${oldvalue}`)
    }
  },
  computed: {
    filerList() {
      return this.list.filter(item => item.fileName.indexOf(this.listQuery.title) > -1)
    },
    paginateList() {
      const newlist = this.list.filter(item => item.fileName.indexOf(this.listQuery.title) > -1)
      console.log(newlist.length)
      return newlist.filter((item, index) => {
        return index < this.listQuery.limit * this.listQuery.currengPage && index >= this.listQuery.limit * (this.listQuery.currengPage - 1)
      })
    },
    isImg() {
      return isImg(this.previewimg)
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getAttachmentList().then(res => {
        this.list = res.data
        console.log(res.data)
      })
    },
    deleteAttachmentById(ids) {
      deleteAttachmentById(ids).then(res => {
        console.log(res.data)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetchData()
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      if (val.length > 0) {
        this.deleteButton = true
      } else {
        this.deleteButton = false
      }
      // console.log(val)
    },
    viewFile(row) {
      this.previewimg = row.fullPath
      this.dialogVisible = true
    },
    closePreview() {
      this.dialogVisible = false
      this.previewimg = ''
    },
    deleteFile(row) {
      console.log('delete item which name of ', row.fileName)
    },
    deleteFiles() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const ids = this.selectColId()
        console.log(ids)
        this.deleteAttachmentById(ids)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    selectColId() {
      let ids = ''
      for (const value of this.multipleSelection) {
        // console.log(value)
        if (ids.length > 0) {
          ids = ids + ',' + value.id
        } else {
          ids = value.id
        }
      }
      return ids
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.listQuery.limit = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.listQuery.currengPage = val
    },
    imageSuccessCBK() {
      console.log('ok')
    }
  }
}
</script>

<style scoped>
    .padding{
        padding:10px
    }
    .buttons{
      float: right
    }
    .search{
      width:80%
    }
    .el-select .el-input {
      width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .pagination{
      position: absolute;
      bottom: 10px;
    }
    .pagination-container{
      position: fixed;
      bottom: 0;
      padding: 10px;
      width:100%;
      text-align:center;
    }
    .table{
      min-height:700px;
      margin-bottom :30px;
    }

    .scrollbar-wrapper {
      height: calc(100vh - 200px);
      overflow-x: hidden!important;
       
    }
</style>

