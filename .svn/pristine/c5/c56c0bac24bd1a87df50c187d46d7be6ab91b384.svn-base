<template>
  <div class="_login-input" :style="{'width': width}">
    <div class="_label" v-if="label.length > 0">
      <span v-for="c in label">{{c}}</span>
    </div>
    <div class="_icon" v-if="icon.length || $slots.icon">
      <slot name="icon">
        <svg v-if="icon == 'user'" class="icon"><use xlink:href="#icon-phone"></use></svg>
        <svg v-if="icon == 'phone'" class="icon" style="top: 10px;"><use xlink:href="#icon-phone"></use></svg>
        <svg v-if="icon == 'lock'" class="icon"><use xlink:href="#icon-vcode"></use></svg>
        <svg v-if="icon == 'vcode'" class="icon"><use xlink:href="#icon-vcode"></use></svg>
      </slot>
    </div>
    <div class="_input" :class="{'_input-error': !!error}">
      <slot name="input">
        <input type="text" placeholder="请输入短信验证码">
      </slot>
    </div>
    <div class="_vcode" v-if="$slots.vcode">
      <slot name="vcode"></slot>
    </div>
    <span class="_error" v-show="!!error">{{error}}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      width: { type: String, default: "350px"},
      label: { type: String, default: ""},
      vcode: { type: String, default: ""},
      icon: { type: String, default: "" },
      error: { type: String, default: "" }
    },
    created () {
      // console.log("$slots", this.$slots)
    }
  }
</script>

<style lang="scss">
  ._login-input {
    position: relative;
    width: 400px;
    height: 44px;
    color: #656667;
    margin-bottom: 22px;
    ._label, ._icon, ._vcode {
      position: absolute;
      height:100%;
    }
    ._input {
      width: 100%;
      height: 100%;
    }
    ._input input {
      width: 100%;
      height:100%;
      line-height: 40px;
      padding: 5px;
      border: 1px solid #DCDDDE;
      font-size: 14px;
      border-radius: 0;
      &:focus {
        border-color: #29AAEA;
      }
    }
    ._input._input-error input {
      border-color: #ff4949;
      &:focus {
        border-color: #29AAEA;
      }
    }
    ._icon svg.icon{
      position: absolute;
      top: 9px;
      left: 10px;
      font-size: 24px;
      color: #444;
    }
    ._label {
      width: 100px;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px;
      font-size: 14px;
    }
    ._vcode {
      right: 0;
      top: 0;
      height: 44px;
      width: 80px;
      padding: 2px;
      border-left: 1px solid #DCDDDE;
      cursor: pointer;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    ._error {
      color: #ff4949;
      font-size: 12px;
      line-height: 1;
      padding-top: 4px;
      padding-left: 10px;
      position: absolute;
      top: 100%;
      left: 0;
    }
    ._label + ._input input {
      padding-left: 100px;
    }
    ._icon + ._input input {
      padding-left: 40px;
    }
    ._login-input-vcode input {
      padding-right: 42px;
    }
  }
</style>
