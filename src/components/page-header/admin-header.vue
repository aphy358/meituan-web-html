<template>
  <div>
    <div class="_page-header">
      <div class="_page-header-logo"></div>
      <div class="_page-header-admin-right">
        <div class="_page-header-right-user">
           <strong>您好，管理员</strong>
         <!--  <el-dropdown trigger="hover" :show-timeout="0" @command="handleDropdownMenuCommand">
            <div class="el-dropdown-link">
              <strong>您好，管理员</strong><i class="el-icon-caret-bottom el-icon--right"></i>
            </div>
            <!-- <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0" class="_danger">退出登录</el-dropdown-item>
            </el-dropdown-menu> -->
          <!-- </el-dropdown> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //import { mapGetters } from "vuex"
  export default {
    computed: {
      // ...mapGetters({
      //   user: "getUser"
      // }),
    },
    data() {
      return {
      }
    },
    methods: {
      logout(){
        this.$store.commit('updateUser', {})
        this.$router.push({ path: '/admin/login'})
        setTimeout(()=>{
          localStorage.clear()
        },0)
      },
      handleDropdownMenuCommand (command) {
        if (command == 0) {
          // 退出登录
          return this.logout()
        }
      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  ._page-header {
    margin-left: 60px;
    margin-right: 60px;
    color:#fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid transparent;
  }
  ._page-header-logo {
    width: 186px;
    height: 78px;
    cursor: pointer;
    background-repeat: no-repeat;
    /**background-image: url('/static/images/logo.png');**/
  }
  ._page-header-admin-right {
    padding: 0 12px;
    display: flex;
    > div {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ._page-header-right-company {
      border-right: 1px solid #4AB7EC;
      padding-right: 12px;
    }

    ._page-header-right-message {
      font-size: 25px;
      position: relative;
      width: 58px;
      border-left: 1px solid transparent;
      border-right: 1px solid #4AB7EC;
      cursor: pointer;
      &:hover {
        background: rgba(121, 121, 121, 0.15);
      }
      .el-badge { margin-right: 2px; }
      .el-badge__content {
        border: none;
      }
    }

    ._page-header-right-user {
      height: 79px;
      line-height: 79px;
      min-width: 80px;
      max-width: 150px;
      cursor: pointer;
      padding:0 10px 0 12px;
      &:hover {
        background: rgba(121, 121, 121, 0.15);
      }
      .el-dropdown {
        color: #fff;
        height: 79px;
        line-height: 79px;
        text-align: right;
      }
    }
  }
</style>
