<template>
  <div>
    <button @click="toggle">toggle component-son1</button>
    <component-son1 v-if="show"></component-son1>
    <component-son2 title="My journey with Vue"></component-son2>
    <component-son3 :style="{ fontSize: postFontSize + 'em' }" v-for="post in posts" :key="post.id" :title="post.title"
                    @enlarge-text="updateFontSize($event)"></component-son3>
  </div>
</template>

<script>
import ComponentSon1 from "./ComponentSon1";
import ComponentSon2 from "./ComponentSon2";
import ComponentSon3 from "./ComponentSon3";

export default {
  name: 'ComponentParent',
  components: {ComponentSon2, ComponentSon1, ComponentSon3},

  data() {
    return {
      posts: [
        {id: 1, title: 'My journey with Vue'},
        {id: 2, title: 'Blogging with Vue'},
        {id: 3, title: 'Why Vue is so fun'}
      ],
      postFontSize: 1,
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },

    updateFontSize(args) {
      this.postFontSize += args
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
