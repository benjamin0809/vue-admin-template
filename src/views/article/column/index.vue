<template>
    <div class="column-container">

        <el-row class="tac" :gutter="6">
           
                <el-col :span="6"  >
                      <column-list :column="column"></column-list>
                </el-col>
            <el-col :span="18"  >
                     <div class="column">
                     <h1>添加栏目</h1>

                    <el-tag :key="item.id" v-for="(item,index) in column" closable   
                    :disable-transitions="false" @close="handleClose(index)"> {{item.name}}
                    </el-tag>

                     <el-input v-model="newCol" placeholder="请输入内容"></el-input>
                    </div>
                </el-col>
      </el-row>
    </div>
</template>

<script>
import { getArticleCol } from '@/utils/data'
import columnList from './../components/columnList'
export default {
  components: { columnList },
  data() {
    return {
      column: getArticleCol(),
      newCol: ''
    }
  },
  methods: {
    handleClose(index) {
      this.column.splice(index, 1)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
    .column{
        padding: 10px;
    }.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>


