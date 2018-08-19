<template > 
<div class="administrator-container">
      <el-scrollbar class="scrollbar-wrapper">
        <el-table :data="UserList" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.username }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.userid }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="user ID"
            prop="userid">
          </el-table-column>
          <el-table-column
            label="user名称"
            prop="username">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="desc">
          </el-table-column>
        </el-table>
        
      </el-scrollbar> 
      </div>
</template>
<script>
import { getUser } from '@/utils/data'
export default {
  data() {
    return {
      title: 'administration',
      UserList: getUser(20)
    }
  }
}
</script>
<style>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .administrator-container{ 
    height: 100%;  
    top: 0;
    bottom: 0; 
    z-index: 1001;
    overflow: hidden;

    .eeeee{

    }
    .is-horizontal {
      display: none;
    }
    
    
    .el-table{
      height: 100%
    }
   
  } 
</style>