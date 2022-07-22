<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="log">记录日志</button>
    <button @click="report">上报日志</button>
  </div>
</template>

<script>
import logan from 'logan-web'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    log() {
      logan.log("Your log content", 1)
    },
    async report() {
      const today = new Date()
      console.log(this.timeFormat2Day(today))
      const reportResult = await logan.report({
        reportUrl: 'http://127.0.0.1:18081/web/log/report',
        deviceId: 'LocalDeviceIdOrUnionId',
        fromDayString: '2022-07-22',
        toDayString: '2022-07-22',
      })
      console.log(reportResult)
    },

    timeFormat2Day(date) {
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      let D = date.getDate();
      return Y + '-' + (M < 10 ? '0' + M : M) + '-' + (D < 10 ? '0' + D : D);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
