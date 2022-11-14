<template>
  <div style="position: relative">
    <el-button @click="openDialog">对话框</el-button>
    <el-dialog title="创建标签" :visible.sync="show" width="480px">
      <el-form ref="tagForm" :model="inputForm" :rules="rules">
        <el-form-item label="标签名称" prop="inputTag">
          <el-input v-model="inputForm.inputTag" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="所属主题" prop="inputTheme">
          <el-select v-model="inputForm.inputTheme" placeholder="请选择" clearable style="width: 100%;">
            <el-option v-for="theme in themes" :key="theme.value" :label="theme.name" :value="theme.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "FormValidation",
  data() {
    return {
      show: false,
      inputForm: {
        inputTag: '',
        inputTheme: ''
      },
      themes: [
        {
          "name": "动漫",
          "value": "comic"
        }
      ],
      rules: {
        inputTag: [
          {required: true, message: '标签名称不能为空', trigger: 'blur' }
        ],
        inputTheme: [
          {required: true, message: '所属主题不能为空', trigger: ['blur','change'] }
        ]
      }
    }
  },
  methods: {
    openDialog() {
      this.show = true
    },
    closeDialog() {
      this.show = false
      this.$refs.tagForm.resetFields()
      console.log(this.inputForm)
    }
  }
}
</script>

<style scoped>

</style>