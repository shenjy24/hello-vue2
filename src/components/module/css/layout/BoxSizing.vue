<template>
  <!-- 盒子模型 -->
  <div class="container">
    <header>
      <h1>Franklin Running Club</h1>
    </header>
    <main class="main">
      <h2>Come join us!</h2>
      <p>
        The Franklin Running club meets at 6:00pm every Thursday
        at the town square. Runs are three to five miles, at your
        own pace.
      </p>
    </main>
    <aside class="sidebar">
      <div class="widget"></div>
      <div class="widget"></div>
      <div class="gizmo"></div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "BoxSizing"
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  background-color: #eee;
  font-family: Helvetica, Arial, sans-serif;
}

header {
  color: #fff;
  background-color: #0072b0;
  border-radius: .5em;
}

main {
  display: block; /*修复IE的BUG，IE有一个bug，它会默认将<main>元素渲染成行内元素，而不是块级元素*/
}

.main {
  /*box-sizing: border-box;*/
  float: left;
  width: 70%;
  background-color: #ad9a9a;
  border-radius: .5em;
}

.sidebar {
  /*box-sizing: border-box;*/
  float: left;
  width: calc(30% - 1.5em);
  margin-left: 1.5em;
  padding: 1.5em;
  background-color: #ad9a9a;
  border-radius: .5em;
}
</style>
