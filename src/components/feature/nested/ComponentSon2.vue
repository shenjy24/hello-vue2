<template>
  <div class="hi">
    <h3>{{ myTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ComponentSon2',
  props: ['title'],
  data() {
    return {
      count: 0
    }
  },
  methods: {

  },
  computed: {
    myTitle() {
      return this.title + ":" + this.count
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
