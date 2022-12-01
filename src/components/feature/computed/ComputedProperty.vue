<template>
  <div class="hi">
    <p>Original message: "{{ msg }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Computed reversed message: "{{ getReversedMessage() }}"</p>
    <input v-model:value="msg"/>
    <input v-model:value="num"/>
    <button @click="updateNum()">更新Num</button>
  </div>
</template>

<script>
export default {    //计算属性
  name: 'ComputedProperty',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 0
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    },

    getCount() {
      return this.$store.state.counter.count
    }
  },
  methods: {
    getReversedMessage() {
      return this.msg.split('').reverse().join('')
    },

    updateNum() {
      this.$store.dispatch("counter/setCountAction", this.num)
    }
  },
  watch: {  //侦听器，需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的
    //如果 `msg` 发生改变，这个函数就会运行
    msg() {
      console.log(this.msg)
    },
    reversedMessage() {
      console.log('reversedMessage')
    },
    getCount() {
      console.log('getCount')
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
