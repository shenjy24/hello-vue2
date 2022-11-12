<template>
  <div class="page">
    <header>
      <!-- 外部的会直接覆盖内部的，内部的相当于默认内容 -->
      <slot name="header" :page="page">
        {{ page.header1 }}
      </slot>
      <main>
        <slot>
          <div>{{ post.title }}</div>
          <div>{{ post.content }}</div>
        </slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </header>
  </div>
</template>

<script>
export default {
  name: "WebPage",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      page: {
        header1: 'web header1',
        header2: 'web header2',
        footer: 'web footer'
      }
    }
  }
}
</script>

<style scoped>
.page {
  color: red;
  font-size: 20px;
}
</style>
