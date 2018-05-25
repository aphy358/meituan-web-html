<template>
   <page-panel title="酒店数据管理">
    <template slot="page-panel-header-btns">
      <el-button type="primary" @click="onSyncPoiStatus" :loading="isLoading">全量同步美团酒店匹配状态</el-button>
    </template>
    <section slot="page-panel-body">
      <!-- 查询 -->
      <div class="_search-header">
        <el-form :inline="true" :model="queryObj">
          <el-form-item>
           <!--  <el-input v-model="queryObj.companyAccountId" placeholder="商家ID" :maxlength="20" clearable></el-input> -->
            <company-account-selected v-model="queryObj.companyAccountId"  style="width: 350px;"></company-account-selected>
          </el-form-item>
          <el-form-item>
            <el-select v-model="queryObj.statusCode" placeholder="是否匹配" clearable>
                <el-option label="未匹配" value="0"></el-option>
                <el-option label="已匹配" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="loadTableData" :loading="isLoading">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 列表 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" prop="hotelId" label="酒店ID"> </el-table-column>
        <el-table-column align="center" prop="hotelName" label="酒店名称"> </el-table-column>
        <el-table-column align="center" label="匹配状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.statusCode == 0 ? 'gray' : 'success'">{{ scope.row.statusCode == 0 ? "未匹配": "已匹配"}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="同步时间">
          <template slot-scope="scope">
            {{$utils.date.dateFormat(scope.row.createTime,'yyyy-MM-dd HH:mm:ss')}}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateTime" label="最后修改时间"> 
           <template slot-scope="scope">
            {{$utils.date.dateFormat(scope.row.updateTime,'yyyy-MM-dd HH:mm:ss')}}
           </template>
        </el-table-column>
        <el-table-column align="center" width="200" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="info" @click="onSync(scope.row)" v-show="scope.row.statusCode==0">同步美团状态</el-button>
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
import CompanyAccountSelected from '@/pages/components/company-account-selected'
export default {
  components:{CompanyAccountSelected},
  data () {
    return {
      isLoading:false,
      tableData:[],
      pageNo :1,
      pageSize :20,
      total: 0,
      queryObj:{
        companyAccountId:'',
        statusCode:''//匹配状态 0 未匹配 1 已匹配
      },
    }
  },
  methods:{
     loadTableData: async function() {
      this.isLoading=true
      this.queryObj.pageNo = this.pageNo
      this.queryObj.pageSize = this.pageSize
      let result=await this.$api.request.getMeiTuanHotelPageList(this.queryObj)
      const {error,data}=result
      if(error!=null)
        return
      this.tableData=data.dataList
      this.total=data.totalRows
      this.isLoading=false
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.loadTableData()
    },
    handleCurrentChange(val) {
      this.pageNo = val
      this.loadTableData()
    },
    async onSync(row){
      this.isLoading=true
      let params={'companyAccountId':row.companyAccountId,'poiIds':row.hotelId}
      let result = await this.$api.request.syncPoiStatus(params)
      const {error,data}=result
      if(error!=null)
        return
      console.log('data',data)
      if(data.success){
        this.$message.success("操作成功")
        this.loadTableData()
      }else{
        this.$message.error(data.message)
      }
      this.isLoading=false
    },
    onSyncPoiStatus:async function(row){
      this.isLoading=true
      try {
        await this.$confirm(`确认要提交操作吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 同意
        console.log("confirm, 删除中...")
        let result = await this.$api.request.syncPoiStatus()
        const {error,data}=result
        if(error!=null)
          return
        if(data.success){
          this.$message.success("操作成功")
        }else{
          this.$message.error(data.message)
        }
      } catch (e) {
        this.isLoading=false
      }
      this.isLoading=false
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

