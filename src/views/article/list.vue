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
                <el-button type="danger" @click="publish()"  size="small" icon="el-icon-delete">废弃</el-button>  
                  <router-link  :to="'/article/create'" >
                  <el-button type="primary" size="small" icon="el-icon-edit">创建</el-button>
                  </router-link>
              </div>
              
              </div>
            </el-col>
          </el-row>

        <div class="wrapper" ref="wrapper">
          <el-scrollbar overflow-x="hidden" height="100%" style="height:800px">
          <el-table :data="list" stripe style="width: 100%;min-height: 800px;padding-right:20px"> 
          <el-table-column type="selection" width="55"></el-table-column>
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
            <span v-if="scope.row.status === 9"><el-tag type="success">已发布</el-tag></span>
            <span v-else-if="scope.row.status === 0"><el-tag type="info">编辑</el-tag></span>
            <span v-else-if="scope.row.status === -1"><el-tag type="danger">废弃</el-tag></span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200px"  >
            <template slot-scope="scope">  
            <el-button type="primary" size="small" icon="el-icon-edit" @click="goEdit(scope.row.id)" :disabled="scope.row.status != 0"></el-button>
            <el-button type="danger" size="small" @click="goEdit(scope.row.id)" icon="el-icon-delete" :disabled="scope.row.status === 9"></el-button>
            <el-button type="success" size="small" @click="publish(scope.row.id,9)" :disabled="scope.row.status != 0"  >发布</el-button>
            </template>
          </el-table-column> 
        </el-table>
        </el-scrollbar>
        </div>
       
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewslistByCount } from '@/utils/data'
import article from '@/api/article'
import { getArticleCol } from '@/utils/data'
import columnList from './components/columnList'
// const wrapper = document.querySelector('.wrapper')
// const scroll = new BScroll(wrapper)
export default {
  components: { columnList },
  data() {
    return {
      listQuery: {
        title: ''
      },
      list: getNewslistByCount(20),
      constlist: [],
      column: getArticleCol()
    }
  },
  created() {
    this.getList()
    this.constlist = this.list
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
      }).catch(() => {
        this.list = this.constlist.filter(item => item.type.indexOf(result.value) > -1)
      })
    },
    goEdit(id) {
      this.$router.push({ name: 'edit', params: { articleid: id }})
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

    }.wrapper{ 
      height:800px
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    el-scrollbar__wrap {
      overflow-x: hidden;
    }
</style>

