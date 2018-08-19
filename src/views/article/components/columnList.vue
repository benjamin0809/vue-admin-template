<template>
    <div class="column">
        <h1>栏目</h1>
        
        <el-scrollbar   height="100%" style="height:100%">
        <el-menu default-active="0"   class="el-menu-vertical-demo" >
            <el-menu-item :index="index + ''"  v-for="(item,index) in column" :key="item.id" @click="clickItem(item)">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
  props: {
    column: Array,
    isHideAll: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clickItem(item) {
      console.log(item)
      this.$emit('clickItem', item)
    }
  },
  computed: {
    hideAll: function(value) {
      if (this.isHideAll && !value) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
.column{
        padding: 10px;
        height:100%
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
</style>
 
