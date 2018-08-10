<template >
  <div class="tabs-container">
  <el-tag type="info">{{createTimes}}</el-tag>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane v-for="(item, index) in tabsMap" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName == item.key' @create="create" :createTimes="index"></tab-pane>
        </keep-alive>
      </el-tab-pane> 
    </el-tabs>
  </div>
</template>


<script>
import tabPane from './component/tabPane'
export default {
  name: 'tabs',
  components: { tabPane },
  data() {
    return {
      tabsMap: [
        { label: 'China', key: 'CN' },
        { label: 'America', key: 'US' },
        { label: 'Eurp', key: 'EU' },
        { label: 'Japan', key: 'JP' }
      ],
      createTimes: 0,
      activeName: 'CN'
    }
  },
  methods: {
    create() {
      this.createTimes++
    }
  }
}
</script>

<style>
  .tabs-container {
    padding: 10px;
  }
</style>