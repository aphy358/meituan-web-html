<template>
   <div class="_page-asider">
     <el-menu default-active="/admin" class="el-menu-vertical-demo" :router="true" :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" style="height: 86vh">
      <el-menu-item index="/admin/sync-poi">
        <i class="el-icon-menu"></i>
        <span slot="title">推送商家酒店</span>
      </el-menu-item>
      <el-menu-item index="/admin/manager-poi">
        <i class="el-icon-menu"></i>
        <span slot="title">酒店数据管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/syncPoiRooms">
        <i class="el-icon-menu"></i>
        <span slot="title">房态数据管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/companyAccount">
        <i class="el-icon-menu"></i>
        <span slot="title">商家推送管理</span>
      </el-menu-item>
    </el-menu>
   </div>
</template>
<script>
export default {
  components:{},
  data () {
    return {

    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

