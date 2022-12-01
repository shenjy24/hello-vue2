<template>
  <div class="hi">
    <h3>{{ title }}</h3>
    <button @click="enlarge">
      Enlarge text
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentSon3',
  props: ['title'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    enlarge() {
      this.$emit('enlarge-text', 0.1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
}
</style>
