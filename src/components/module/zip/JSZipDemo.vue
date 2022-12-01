<template>
  <div>
    <input type="button" @click="create" value="create"/><br>
  </div>
</template>

<script>

import JSZip from "jszip"
import {saveAs} from 'file-saver'

export default {
  name: 'JSZipDemo',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    create() {
      let zip = new JSZip();
      // create a file
      zip.file("hello.txt", "Hello World\n")
      // create a file and a folder
      zip.file("nested/hello.txt", "Hello World\n")
      // same as
      //zip.folder("nested").file("hello.txt", "Hello World\n");
      zip.generateAsync({type : "blob"}).then(content => {
        saveAs(content, "hello.zip")
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
