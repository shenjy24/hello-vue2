<template>
  <div>
    <el-upload
      action="//jsonplaceholder.typicode.com/posts/"
      :before-upload="handleBefore">
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__tip" slot="tip">上传一个zip试一下</div>
    </el-upload>
  </div>
</template>

<script>

import JSZip from "jszip"
import { saveAs } from 'file-saver'

export default {
  name: 'JSZipComponent',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleBefore(file) {
      let new_zip = new JSZip();
      new_zip.loadAsync(file)
        .then(function (zip) {
          //获取压缩包中的logo.png图片
          zip.file("logo.png").async("blob")
            .then(content => {
              //保存至浏览器端
              saveAs(content, `logo1.jpg`);
            })
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
  font-size: 20px;
}
</style>
