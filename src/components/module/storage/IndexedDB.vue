<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" style="display: flex" class="margin-bottom">
        <el-input v-model="addContent" class="margin-right"></el-input>
        <el-button @click="add">添加</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="display: flex" class="margin-bottom">
        <el-input v-model="readKey" class="margin-right"></el-input>
        <el-button @click="read" class="margin-right">读取</el-button>
        <el-input v-model="readContent" disabled></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="display: flex" class="margin-bottom">
        <el-button @click="readAll">遍历</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="display: flex" class="margin-bottom">
        <el-input v-model="updateKey" class="margin-right"></el-input>
        <el-input v-model="updateContent" class="margin-right"></el-input>
        <el-button @click="put" class="margin-right">更新</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="display: flex" class="margin-bottom">
        <el-input v-model="deleteKey" class="margin-right"></el-input>
        <el-button @click="deleteItem" class="margin-right">删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "IndexedDB",
  data() {
    return {
      addContent: '',
      readKey: 0,
      readContent: '',
      updateKey: 0,
      updateContent: '',
      deleteKey: 0,
    }
  },
  methods: {
    add() {
      if (this.addContent) {
        const request = window.indexedDB.open('web-log')
        // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
        request.onupgradeneeded = (e) => {
          console.log('onupgradeneeded：' + e)
        }
        request.onsuccess = (e) => {
          console.log('open success');
          const db = e.target.result
          const addRequest = db.transaction(['errors'], 'readwrite')
              .objectStore('errors')
              .add({'content': this.addContent})
          addRequest.onsuccess = (e) => {
            console.log('insert success: ' + JSON.stringify(e))
          }
          addRequest.onerror = (e) => {
            console.log('insert error:' + JSON.stringify(e))
          }
        }
        request.onerror = (e) => {
          console.log('Error');
          console.log(e);
        }
      }
    },

    read() {
      const request = window.indexedDB.open('web-log')
      // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
      request.onupgradeneeded = (e) => {
        console.log('onupgradeneeded：' + e)
      }
      request.onsuccess = (e) => {
        console.log('open success');
        const db = e.target.result
        const readRequest = db.transaction(['errors'], 'readwrite')
            .objectStore('errors')
            .get(Number.parseInt(this.readKey))
        readRequest.onsuccess = (e) => {
          console.log('read success')
          console.log(e)
          if (readRequest.result) {
            const result = readRequest.result
            this.readContent = result.content
          } else {
            this.readContent = ''
            console.info("未获得数据")
          }
        }
        readRequest.onerror = (e) => {
          console.log('read error:' + JSON.stringify(e))
        }
      }
      request.onerror = (e) => {
        console.log('Error');
        console.log(e);
      }
    },

    readAll() {
      const request = window.indexedDB.open('web-log')
      // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
      request.onupgradeneeded = (e) => {
        console.log('onupgradeneeded：' + e)
      }
      request.onsuccess = (e) => {
        console.log('open success')
        const db = e.target.result
        const readAllRequest = db.transaction(['errors'], 'readwrite')
            .objectStore('errors')
            .openCursor()
        readAllRequest.onsuccess = (e) => {
          const cursor = e.target.result
          if (cursor) {
            console.log(`id:${cursor.key} content:${cursor.value.content}`)
            cursor.continue()
          } else {
            console.info("没有更多数据了")
          }
        }
        readAllRequest.onerror = (e) => {
          console.log('read error:' + JSON.stringify(e))
        }
      }
      request.onerror = (e) => {
        console.log('Error');
        console.log(e);
      }
    },

    put() {
      const request = window.indexedDB.open('web-log')
      // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
      request.onupgradeneeded = (e) => {
        console.log('onupgradeneeded：' + e)
      }
      // 不存在则会新增
      request.onsuccess = (e) => {
        console.log('open success');
        const db = e.target.result
        const putRequest = db.transaction(['errors'], 'readwrite')
            .objectStore('errors')
            .put({'content': this.updateContent}, Number.parseInt(this.updateKey))
        putRequest.onsuccess = (e) => {
          console.log('update success: ' + JSON.stringify(e))
        }
        putRequest.onerror = (e) => {
          console.log('update error:' + JSON.stringify(e))
        }
      }
      request.onerror = (e) => {
        console.log('Error');
        console.log(e);
      }
    },

    deleteItem() {
      const request = window.indexedDB.open('web-log')
      // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件
      request.onupgradeneeded = (e) => {
        console.log('onupgradeneeded：' + e)
      }
      request.onsuccess = (e) => {
        console.log('open success');
        const db = e.target.result
        const putRequest = db.transaction(['errors'], 'readwrite')
            .objectStore('errors')
            .delete(Number.parseInt(this.deleteKey))
        putRequest.onsuccess = (e) => {
          console.log('delete success: ' + JSON.stringify(e))
        }
        putRequest.onerror = (e) => {
          console.log('delete error:' + JSON.stringify(e))
        }
      }
      request.onerror = (e) => {
        console.log('Error');
        console.log(e);
      }
    },
  }
}
</script>

<style scoped>
.margin-right {
  margin-right: 2em;
}

.margin-bottom {
  margin-bottom: 1em;
}
</style>
