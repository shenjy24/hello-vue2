<template>
  <div>
    <div>{{ count }}</div>
    <input type="button" @click="updateCount()" value="click"/>
  </div>
</template>

<script>
export default {
  name: "SessionStorage",
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    if (!sessionStorage.count) {
      sessionStorage.count = 0
    } else {
      this.count = sessionStorage.count
    }
  },
  methods: {
    updateCount() {
      //sessionStorage只能存储字符串格式
      //sessionStorage无法响应式
      let c = parseInt(sessionStorage.count) + 1
      sessionStorage.count = c
      this.count = c
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
