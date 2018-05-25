<template>
   <page-panel title="新闻管理">
    <template slot="page-panel-header-btns">

    </template>
    <section slot="page-panel-body">
      <!-- 查询 -->
      <div class="_search-header">
        <el-form :inline="true" :model="queryObj">
          <el-form-item>
            <el-input v-model="queryObj.titleCN" placeholder="标题名称" :maxlength="20" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="queryObj.statusCode" placeholder="是否有效" clearable>
                <el-option label="有效" value="0"></el-option>
                <el-option label="无效" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="loadTableData">查询</el-button>
            <el-button icon="el-icon-plus" type="primary" @click.native="$emit('forward','NewsForm',null)">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-tabs v-model="activeName" style="width:100%" @tab-click="onTabClick">
        <el-tab-pane label="新闻动态" name="tab1"></el-tab-pane>
        <el-tab-pane label="员工丰彩" name="tab2"></el-tab-pane>
        <el-tab-pane label="企业介绍" name="tab3"></el-tab-pane>
        <el-tab-pane label="企业文化" name="tab4"></el-tab-pane>
      </el-tabs>
      <!-- 列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" prop="newsID" label="编号" width="200"> </el-table-column>
        <el-table-column align="center" prop="titleCN" label="标题" width="500"> </el-table-column>
        <el-table-column align="center" prop="readCount" label="阅读数"> </el-table-column>
        <el-table-column align="center" label="是否置顶">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isTop == 0 ? 'gray' : 'success'">{{ scope.row.isTop == 0 ? "否": "是"}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="是否热门">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isHot == 0 ? 'gray' : 'success'">{{ scope.row.isHot == 0 ? "否": "是"}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createdDtm" label="创建日期"> </el-table-column>
        <el-table-column align="center" width="200" label="操作">
          <template slot-scope="scope">
            <el-button type="danger" @click="onRemove(scope.row)" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <el-pagination slot="page-panel-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="[20, 50, 100, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </page-panel>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  components:{},
  data () {
    return {
      tableData:[],
      pageNo :1,
      pageSize :20,
      total: 0,
      queryObj:{
        titleCN:'',
        statusCode:'',
        contentType:0//文章类型 0 新闻动态 1 员工丰彩 2 企业介绍
      },
      activeNameBak:'',
      activeName:'tab1'
    }
  },
  methods:{
    onTabClick(tab, event){
      let tabName=tab.name
      if(tabName==this.activeNameBak)
        return false
      if(tabName=='tab1'){
        this.queryObj.contentType=0
      }else if(tabName=='tab2'){
        this.queryObj.contentType=1
      }else if(tabName=='tab3'){
        this.queryObj.contentType=2
      }else if(tabName=='tab4'){
        this.queryObj.contentType=3
      }
      this.activeNameBak=cloneDeep(tabName)
      this.loadTableData()
    },
    loadTableData: async function() {
      this.queryObj.pageNo = this.pageNo
      this.queryObj.pageSize = this.pageSize
      let result=await this.$api.request.queryMessagePageList(this.queryObj)
      const {error,data}=result
      if(error!=null)
        return
      this.tableData=data.list
      this.total=data.total
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.loadTableData()
    },
    handleCurrentChange(val) {
      this.pageNo = val
      this.loadTableData()
    },
    onRemove:async function(row){
      try {
        await this.$confirm(`确认要删除吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        console.log("confirm, 删除中...")
        let result = await this.$api.request.delMessage({messageID:row.messageID})
        const {error,data}=result
        if(error!=null)
          return
        if(data.success){
          this.$message.success("操作成功")
          this.loadTableData()
        }else{
          this.$message.error(data.errorMsg)
        }
        //this.$message({type: 'success', message: res})
      } catch (e) {
        // 取消
        //this.$message({type: 'info', message: '已取消删除'})
      }
    }
  },
  created() {
    this.loadTableData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

