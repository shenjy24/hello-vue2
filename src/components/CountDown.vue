<template>
  <div>
    <span>倒计时：{{ countdown }}</span>
    <br>
    <button @click="startCountdown()">启动</button>
  </div>
</template>

<script>
import {countdownMixin} from "@/js/countdownMixin";

export default {
  name: "CountDown",
  mixins: [countdownMixin],
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
