<template>
  <div>
    <div class="_page-header container">
      <div class="_page-header-logo" @click="$router.push('/')"></div>
      <div class="_page-header-right">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="">
          <el-menu-item index="1">{{ $t("home") }}</el-menu-item>
          <el-menu-item index="2">{{ $t("aboutUs") }}</el-menu-item>
          <el-menu-item index="3">{{ $t("product") }}</el-menu-item>
          <el-menu-item index="4">{{ $t("news") }}</el-menu-item>
          <el-menu-item index="5">{{ $t("contact") }}</el-menu-item>
        </el-menu>
        <div style="position: absolute;top: 10px;right: 200px;">
          <el-button type="text" @click="setLang('cn')">中文</el-button>
          <div style="position: relative; color:#9e9e9e; width: 1px; height: 80px; padding: 0 20px;display: inline-block;">|</div>
          <el-button type="text" @click="setLang('en')">English</el-button>
        </div>
      </div>
    </div>
    <div>
      <el-carousel :interval="5000" arrow="always"  height="570px">
        <el-carousel-item v-for="item in carouselData" :key="item">
          <h3><img :src="item"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {

    },
    data() {
      return {
        activeIndex:'1',
        carouselData:['/static/images/body/carousel_1.png']
      }
    },
    methods: {
      setLang(lang){
        this.$store.dispatch('setLang', lang)
        this.$i18n.locale = lang
      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  ._page-header {
    margin-top: 60px;
    height: 61px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid transparent;
  }
  ._page-header-logo {
    width: 186px;
    height: 78px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-image: url('/static/images/logo.png');
  }
</style>
