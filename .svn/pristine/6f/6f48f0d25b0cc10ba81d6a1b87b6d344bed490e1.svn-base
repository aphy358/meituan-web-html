<template>
  <div class="_page-panel" :class="klass">
    <div class="_page-panel-h">
      <div class="_page-panel-h-l _ellipsis">
        <slot name="page-panel-header-left">
          <button class="_page-panel-back-btn" v-show="!!backCall" @click.stop="onBack"><i></i> <span>{{backText}}</span></button>
          <h4 class="_page-panel-title _ellipsis" v-show="!!title && !backCall">{{title}}</h4>
        </slot>
      </div>
      <div class="_page-panel-h-c">
        <slot name="page-panel-header-center">
          <div class="_ellipsis">
            <slot name="page-panel-title">
              <h4 class="_page-panel-title _ellipsis" v-show="!!title && !!backCall">{{title}}</h4>
            </slot>
          </div>
        </slot>
      </div>
      <div class="_page-panel-h-r">
        <slot name="page-panel-header-right"></slot>
        <slot name="page-panel-header-btns"></slot>
      </div>
    </div>
    <div class="_page-panel-b">
      <slot name="page-panel-body"></slot>
    </div>
    <div class="_page-panel-pagination">
      <slot name="page-panel-pagination"></slot>
    </div>
    <div class="_page-panel-f">
      <slot name="page-panel-footer">
        <div class="_page-panel-footer-btns"><slot name="page-panel-footer-btns"></slot></div>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      backCall: Function,
      backText: {
        type: String,
        default: "返回"
      },
      title: String,
      size: String,
      type: {
        type: String,
        default: "flex"  // flex, auto
      },
      scroll: {
        type: Boolean,
        default: true
      },
      center: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      klass() {
        return {
          "_page-panel-row": this.type == "row",
          "_page-panel-flex": this.type == "flex",
          "_page-panel-auto": this.type == "auto",
          "_page-panel-scroll": !!this.scroll,
          "_page-panel-small": this.size == "small",
          "_page-panel-header-center": this.center
        }
      }
    },
    methods: {
      onBack(evt) {
        if (typeof this.backCall == "function") {
          this.backCall(evt)
        }
      }
    }
  }
</script>

<style lang="scss">
  ._page-panel {
    position: relative;
    border: 1px solid #ddd;
    background-clip: padding-box;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    overflow: hidden;
    margin-bottom: 12px;

    &._page-panel-flex {
      width: 100%;
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      ._page-panel-b { flex: 1 0 auto; }
    }
    &._page-panel-row {
      width: 100%;
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      > ._page-panel-b { flex: 1 0 auto;  display: flex; }
    }
    &._page-panel-scroll {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      flex: none;
      > ._page-panel-b {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar{
          width: 6px;
          height: 6px;
          border-radius: 4px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          // background-color: #7d7d7d;
          background-color: #969696;
          border-radius: 4px;
        }
      }
    }
    &._page-panel-small {
      ._page-panel-h {
        height: 39px;
        ._page-panel-title {
          font-weight: 400;
          font-size: 16px;
        }
        ._page-panel-h-r button,
        ._page-panel-h-r a {
          font-size: 12px;
          padding: 5px;
        }
      }
    }
  }
  ._page-panel-h {
    position: relative;
    display: flex;
    height: 45px;
    border-bottom: 1px solid #ddd;
    background-color: #fbfbfb;
    flex-shrink: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .el-input { margin-right: 10px; width: auto;}
    .el-input__inner { height: 32px; min-width: 135px;}
    .el-input-group__prepend { color: #333; }
    .el-form-item { margin-bottom: 0; }
    // 调整按钮尺寸
    button, .el-button {
      padding: 8px 12px;
    }
    .el-button--mini {
      padding: 4px;
    }
    .el-button--small {
      padding: 6px 9px;
    }
    .el-button--large {
      padding: 11px 19px;
    }
    .el-button--text {
      padding-left: 0;
      padding-right: 0;
    }
  }
  ._page-panel-h-l {
    position: relative;
    flex: 0.3;
    padding: 0 12px;
  }
  ._page-panel-h-c {
    flex: 0.3;
    text-align: center;
    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
  }
  ._page-panel-title {
    font-weight: 400;
    font-size: 18px;
    color: #555;
    .el-input__inner { height: 34px; }
  }
  ._page-panel-h-r {
    flex: 0.4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 12px;
  }

  ._page-panel._page-panel-header-center {
    ._page-panel-h-l { flex: 0.3; }
    ._page-panel-h-c { flex: 0.4; }
    ._page-panel-h-r { flex: 0.3; }
  }

  ._page-panel-b {
    position: relative;
    padding: 12px;
    min-height: 200px;
    background-color: #fff;
  }
  ._page-panel-h-l {
    display: flex;
    align-items: center;
  }
  ._page-panel-back-btn {
    background: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;
    color: #555;
    padding: 8px 12px !important;
    margin-left: -8px;
    font-size: 18px;
    color: #666;
    // position: absolute;
    // left: 0;
    // top: 4px;

    transition: opacity .10s;

    // back arrow
    i {
      display: inline-block;
      position: relative;
      width: 13px;
      height: 13px;
      border-color: #555;
      border-style: solid;
      border-width: 0 0 2px 2px;
      transform: rotate(45deg);
    }
    // back text
    span {
      margin-left: -8px;
    }
    &:hover {
      opacity: 0.71;
    }
    &:active {
      opacity: 0.68;
      background: rgba(60, 60, 60, 0.05);
    }
  }
  ._page-panel-f {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    // 调整按钮尺寸
    button, .el-button {
      padding: 8px 12px;
    }
    .el-button--mini {
      padding: 4px;
    }
    .el-button--small {
      padding: 6px 9px;
    }
    .el-button--large {
      padding: 11px 19px;
    }
    .el-button--text {
      padding-left: 0;
      padding-right: 0;
    }
  }
  ._page-panel-footer-btns {
    &:empty { display: none; }
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
    height: 43px;
    border-top: 1px solid #ddd;
    background-color: #f5f5f5;
    padding: 0 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  ._page-panel-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-top: 1px solid #eee;
    overflow: hidden;
    &:empty { display: none; }
  }
</style>
