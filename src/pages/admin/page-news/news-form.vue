<template>
   <page-panel title="新增"  :back-call="callBack">
    <template slot="page-panel-header-btns">

    </template>
    <section slot="page-panel-body">
      <el-form class="_form-beautify" :model="paramsForm" :rules="rules" ref="paramsForm" label-width="180px">
        <el-form-item label="文章类型" required>
          <el-radio-group v-model.number="paramsForm.contentType">
            <el-radio :label="0">新闻动态</el-radio>
            <el-radio :label="1">员工丰彩</el-radio>
            <el-radio :label="2">企业介绍</el-radio>
            <el-radio :label="3">企业文化</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="中文标题" prop="titleCN">
          <el-input placeholder="请输入中文标题" v-model="paramsForm.titleCN" :maxlength="100" autofocus clearable></el-input>
        </el-form-item>
        <el-form-item label="英文标题">
          <el-input placeholder="请输入英文标题" v-model="paramsForm.titleEN" :maxlength="100" clearable></el-input>
        </el-form-item>
        <el-form-item label="是否置顶">
          <el-radio-group v-model.number="paramsForm.isTop">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否热门">
          <el-radio-group v-model.number="paramsForm.isHot">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否有效">
          <el-radio-group v-model.number="paramsForm.statusCode">
            <el-radio :label="0">有效</el-radio>
            <el-radio :label="1">无效</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="中文内容">
          <vue-editor id="editor" useCustomImageHandler @imageAdded="handleCNImageAdded" v-model="paramsForm.contentCN" style="min-width: 900px;">
          </vue-editor>
        </el-form-item>
        <el-form-item label="英文内容">
          <vue-editor id="editor2" useCustomImageHandler @imageAdded="handleENImageAdded" v-model="paramsForm.contentEN" style="min-width: 900px;">
          </vue-editor>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :rows="3" placeholder="请输入描述" v-model="paramsForm.comments" :maxlength="255"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
        </el-form-item>
      </el-form>
    </section>
  </page-panel>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import { VueEditor } from 'vue2-editor'
export default {
  components:{VueEditor},
  props: {
    paramObj: {
        type: Object,
        default: {
        }
    }
  },
  data () {
    return {
      //htmlForEditor:'',
      paramsForm:{
        contentType:0,
        titleCN:'',
        titleEN:'',
        isTop:0,
        isHot:0,
        statusCode:0,
        comments:'',
        contentCN:'',
        contentEN:''
      },
      rules:{
        titleCN: [
          { required: true, message: '请输入中文标题', trigger: 'change' }
        ],
        sortIndex: [
          { type: 'number',required: true, message: '请输入排序号', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handleCNImageAdded(file, Editor, cursorLocation, resetUploader){

    },
    handleENImageAdded(file, Editor, cursorLocation, resetUploader){

    },
    onSave(){},
    callBack(){
      this.$emit('forward','NewsList')
    }
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

