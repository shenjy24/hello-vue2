<template>
  <div class="hi">
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentSon1',
  data() {
    return {
      count: 0
    }
  },

  created() {
    console.log("ComponentSon1 created")
  },

  mounted() {
    console.log("ComponentSon1 mounted")
  },

  methods: {
    onClickButton() {
      this.$emit('click-button')
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
