<template>
  <div>
    <span>倒计时：{{ countdown }}</span>
    <br>
    <button @click="startCountdown()">启动</button>
  </div>
</template>

<script>
import {countdown} from "@/js/mixin/countdown";

export default {
  name: "CountDown",
  mixins: [countdown],
  mounted() {
    this.restart("countdown")
  },

  methods: {
    startCountdown() {
      this.start("countdown", 180)
    },
  },

  computed: {
    countdown() {
      return this.getCountdown("countdown")
    }
  }
}
</script>

<style scoped>

</style>
