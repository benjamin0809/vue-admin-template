<template >
  <div class="list-container">

    <el-row class="tac" :gutter="6">
           
                <el-col :span="6"  >
                     <column-list :column="column" @clickItem="filterList"></column-list>
                </el-col>
                <el-col :span="18">
    <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="search padding">
            <el-input placeholder="请输入内容" v-model="listQuery.title" clearable class="input-with-select">
 
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
            
          </div>
          </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <div class="buttons padding">
            <el-button type="danger" @click="publish()"   icon="el-icon-delete">废弃</el-button>  

             <router-link  :to="'/article/create'" >
              <el-button type="primary" size="small" icon="el-icon-edit">创建</el-button>
              </router-link>
 
          </div>
          
          </div>
        </el-col>
      </el-row>

       <el-table :data="list" stripe style="width: 100%">
         <el-table-column type="selection" width="55">
    </el-table-column>
        <el-table-column prop="title" label="标题" width="380"  >
          <template slot-scope="scope">
            <router-link class="link-type" :to="'/article/detail/' + scope.row.id">
              <span>{{ scope.row.title }}</span>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="分类" width="180"> </el-table-column>
        <el-table-column prop="tag" label="标签"> </el-table-column>
        <el-table-column prop="istop" label="置顶">
          <template slot-scope="scope"> 
             <el-checkbox v-model="scope.row.istop" disabled></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
         <template slot-scope="scope"> 
            <span v-if="scope.row.status === 9">
            <el-tag type="success">已发布</el-tag>
            </span>

            <span v-else-if="scope.row.status === 0">
            <el-tag type="info">编辑</el-tag>
            </span>

            <span v-else-if="scope.row.status === 1">
            <el-tag type="danger">废弃</el-tag>
            </span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200px"  >
          <template slot-scope="scope"> 
            <router-link  :to="'/article/edit/' + scope.row.id" >
              <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
              </router-link>
 
              <el-button type="danger" size="small" @click="publish" icon="el-icon-delete" :disabled="scope.row.status === 9"></el-button>
              <!-- <el-button type="danger" size="small"  @click="publish" >删除</el-button> -->
       
              <el-button type="success" size="small" @click="publish(scope.row.id,9)"   >发布</el-button>
          </template>
        </el-table-column>
    </el-table>
                </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewslist } from '@/utils/data'
import article from '@/api/article'
import { getArticleCol } from '@/utils/data'
import columnList from './components/columnList'
export default {
  components: { columnList },
  data() {
    return {
      listQuery: {
        title: ''
      },
      list: getNewslist(),
      column: getArticleCol()
    }
  },
  created() {
    this.getList()
  },
  methods: {
    publish(id, flag) {
      this.$confirm('此操作将发布该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        article.publish(object).then((res) => {
          console.log(res)
          if (res.errcode === 0) {
            this.$message({
              type: 'success',
              message: '发布成功!'
            })
            this.getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        })
      })
      const object = {
        status: flag,
        id: id
      }
    },
    getList() {
      article.list().then(response => {
        this.list = response.data
      })
    },
    filterList(result) {
      article.list().then((response) => {
        const reslist = response.data
        this.list = reslist.filter(item => item.tag.indexOf(result.value) > -1)
      })
    }
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
  .buttons{
      float: right
    }
    .list-container{
      padding:10px
    }
    .column{

    }
</style>

