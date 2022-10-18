<template>
  <div class="hi">
    {{ currentCount }}<br>
    <input type="button" @click="updateCount()" value="click"/>
  </div>
</template>

<script>
export default {
  name: "VuexCounter",
  data () {
    return {
      count: 0
    }
  },
  methods: {
    updateCount() {
      this.$store.dispatch("counter/setCountAction", this.$store.state.counter.count + 1)
    }
  },
  computed: {
    currentCount() {
      return this.$store.state.counter.count
    }
  },
}
</script>

<style scoped>

</style>
