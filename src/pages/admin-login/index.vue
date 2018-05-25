<template>
  <div class="_app-login _admin-login">
    <section class="_app-login-section">
      <div class="_app-login-section-container">
        <div class="_admin-login-logo"></div>
        <h1 class="_app-login-title">账号登录</h1>
        <div class="_app-login-box">
          <login-input icon="user">
            <input slot="input" type="text" v-model="user.username" @keyup.enter="login"  placeholder="请输入用户名" maxlength="11">
          </login-input>
          <login-input icon="lock">
            <input slot="input" type="password" v-model="user.password"  @keyup.enter="login" placeholder="请输入6-20位登录密码" maxlength="20">
          </login-input>
          <login-input icon="vcode" v-if="authEnable">
            <input slot="input" type="text" v-model="user.code" @keyup.enter="login" placeholder="请输入验证码" maxlength="4">
            <img :src="codeImg" slot="vcode" title="点击更新验证码" @click="updateCodeImg">
          </login-input>
          <div class="_app-login-btn">
            <button @click="login">登 录</button>
            <div class="_app-login-btn-loading" v-if="loading"><i class="el-icon-loading"></i></div>
          </div>
          <div class="_app-login-error">
            <span>{{errInfo}}</span>
          </div>
        </div>
      </div>
      <footer>
        <login-footer></login-footer>
      </footer>
    </section>
  </div>
</template>


<script>
  import LoginFooter from "./login-footer"
  import LoginInput from "./login-input"
  const CODE_IMG_PATH = "/getCode?r="
  export default {
    components: { LoginFooter, LoginInput },
    computed: {},
    data () {
      return {
        authEnable:true,
        codeImg: CODE_IMG_PATH + Math.random(),
        loading: false,
        errInfo: "",
        user: {
          username: '',
          password: '',
          code: '',
          loginType:'backend-login' // front-login 运营登录 backend-login 运维登录
        }
      }
    },
    methods: {
      updateCodeImg () {
        this.codeImg = CODE_IMG_PATH + Math.random()
      },
      login: async function () {
        this.errInfo = ''

        // 验证用户输入
        if (!/^[a-zA-Z][a-zA-Z0-9_]{3,20}$/.test(this.user.username)) {
          return this.errInfo = "用户名输入有误"
        }
        if (this.user.password.trim().length < 6) {
          return this.errInfo = "密码输入有误"
        }
        if(this.authEnable){
          if (!/^[a-zA-Z0-9]{4}$/.test(this.user.code)) {
          return this.errInfo = "验证码输入有误"
          }
        }
        this.loading = true
        let res = await this.$api.request.userLogin({
          username  : this.user.username,
          password  : this.$utils.md5(this.user.password),
          authCode  : this.user.code,
          loginType : this.user.loginType
        }, false)

        console.log('res', res)

        // 请求失败
        if (res.error || !res.data.success) {
          this.loading = false
          // 更新下验证码
          this.updateCodeImg()
          return this.errInfo = res.data.errorMsg || "登录出错,请稍后再试"
        }
        localStorage.clear()
        localStorage.token=res.data.token
        localStorage.refreshToken=res.data.refreshToken
        // 登录成功
        this.loading = false
        this.$router.push({ path: this.$route.params.redirect || '/admin' })
      }
    },
    async created(){
      localStorage.clear()
      // let res= await this.$api.system.getEnableAuthCode()
      // this.authEnable = res.data
    }
  }
</script>
