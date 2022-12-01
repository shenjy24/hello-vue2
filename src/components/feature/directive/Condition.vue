<template>
  <div>
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <input type="button" @click="toggleTemplate()" value="toggleTemplate"/>
    </template>
    <template v-else>
      <h1 v-if="show">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
      <input type="button" @click="toggleContent()" value="toggleContent"/>
      <input type="button" @click="toggleTemplate()" value="toggleTemplate"/>
    </template>
  </div>
</template>

<script>
export default {  //条件渲染
  name: 'Condition',
  data() {
    return {
      show: true,
      ok: true
    }
  },
  methods: {
    toggleContent() {
      this.show = !this.show
    },
    toggleTemplate() {
      this.ok = !this.ok
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  color: red;
  font-size: 20px;
}
</style>
