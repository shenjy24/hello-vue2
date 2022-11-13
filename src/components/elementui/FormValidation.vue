<template>
  <div>
    <el-button @click="toggleDialog">对话框</el-button>
    <el-dialog title="创建标签" :visible="isShowDialog" width="480px">
<!--      <el-form :model="inputForm">-->
<!--        <div style="font-size: 14px; color: #6D6F72; margin-top: 10px">标签名称</div>-->
<!--        <el-form-item prop="inputTag">-->
<!--          <el-input v-model="inputForm.inputTag" placeholder="请输入" style="width: 100%; margin-top: 12px"></el-input>-->
<!--        </el-form-item>-->
<!--        <div style="font-size: 14px; color: #6D6F72; margin-top: 10px">所属主题</div>-->
<!--        <el-form-item prop="inputTheme">-->
<!--          <el-select v-model="inputForm.inputTheme" placeholder="请选择">-->
<!--            <el-option v-for="theme in themes" :key="theme.value" :label="theme.name" :value="theme.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
      <div slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">取 消</el-button>
        <el-button type="primary" @click="toggleDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "FormValidation",
  data() {
    return {
      isShowDialog: false,
      inputForm: {
        inputTag: '',
        inputTheme: ''
      },
      themes: [
        {
          "name": "动漫",
          "value": "comic"
        }
      ]
    }
  },
  methods: {
    toggleDialog() {
      this.isShowDialog = !this.isShowDialog
    }
  }
}
</script>

<style scoped>

</style>