<template>
  <div class="dashboard-container">
    <!-- <img src='static/img/timg.gif' style="width:60px;margin:auto"/> -->

    <chiu-thumb image="static/img/timg1.gif" />
 
    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart></raddar-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list></todo-list>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card></box-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import uploadImage from '@/components/upload'
import ChiuThumb from '@/components/ChiuThumb'
import LineChart from './components/LineChart'
import PanelGroup from './components/PanelGroup'
import BoxCard from './components/BoxCard'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import RaddarChart from './components/RaddarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import { randomArray } from '@/utils/array'
const lineChartData = {
  newVisitis: {
    expectedData: randomArray(200, 7),
    actualData: randomArray(200, 7)
  },
  messages: {
    expectedData: randomArray(200, 7),
    actualData: randomArray(200, 7)
  },
  purchases: {
    expectedData: randomArray(200, 7),
    actualData: randomArray(200, 7)
  },
  shoppings: {
    expectedData: randomArray(200, 7),
    actualData: randomArray(200, 7)
  }
}

export default {
  name: 'dashboard',
  components: {
    uploadImage,
    ChiuThumb,
    LineChart, PieChart, RaddarChart, BarChart,
    PanelGroup,
    BoxCard,
    TransactionTable,
    TodoList
  },
  data() {
    return {
      radio: '1',
      slideArray: [{ url: 'static/img/slide/slide1.jpg' }, { url: 'static/img/slide/slide2.jpg' },
        { url: 'static/img/slide/slide3.jpg' },
        { url: 'static/img/slide/slide4.jpg' }],
      lineChartData: lineChartData.newVisitis

    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

  
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } 
</style>

 