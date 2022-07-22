<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" style="display: flex">
        <el-input v-model="content" class="margin-right"></el-input>
        <el-button @click="insert">添加</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "IndexedDB",
  data() {
    return {
      content: ''
    }
  },
  methods: {
    insert() {
      if (this.content) {
        const request = window.indexedDB.open('web-log')
        request.onupgradeneeded = (e) => {
          console.log('onupgradeneeded：' + e)
        }
        request.onsuccess = (e) => {
          console.log('onsuccess:' + e);
          const db = e.target.result
          const insertRequest = db.transaction(['errors'], 'readwrite')
              .objectStore('errors')
              .add({'content': this.content})
          insertRequest.onsuccess = (e) => {
            console.log('insert success: ' + JSON.stringify(e))
          }
          insertRequest.onerror = (e) => {
            console.log('insert error:' + JSON.stringify(e))
          }
        }
        request.onerror = (e) => {
          console.log('Error');
          console.log(e);
        }
      }
    }
  }
}
</script>

<style scoped>
.margin-right {
  margin-right: 2em;
}
</style>
