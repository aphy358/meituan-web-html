<template>
  <ul class="_login-footer">
    <li>
      <!-- <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备15102042号-5</a>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502000157" target="_blank">
        粤公网安备 44030502000157号
      </a> -->

      <a href="#" target="_blank">粤ICP备1510204259号-5</a>
    </li>
    <li>
      <a href="#">Copyright © 2015-2017 深圳市中洲科技有限公司 , All rights Reserved</a>
    </li>
  </ul>
</template>

<style lang="scss">
  ._login-footer {
    color: #969A9B;
    font-size: 14px;
    text-align: center;
    a {
      color: #969A9B;
      position: relative;
      display: inline-block;
    }
    li:first-child {
      a:first-child {
        padding-right: 18px;
        margin-right: 10px;
        &::before {
          position: absolute;
          content: " ";
          width: 1px;
          height: 12px;
          right: -2px;
          top: 4px;
          background: #98999A;
        }
      }
    }
    li {
      margin-bottom: 5px;
    }
  }
</style>

