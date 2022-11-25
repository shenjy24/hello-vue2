<template>
  <!-- 使用Flex布局实现等高列 -->
  <div>
    <header>
      <h1>Franklin Running Club</h1>
    </header>
    <div class="container">
      <main class="main">
        <h2>Come join us!</h2>
        <p>
          The Franklin Running club meets at 6:00pm every Thursday
          at the town square. Runs are three to five miles, at your
          own pace.
        </p>
      </main>
      <aside class="sidebar">
        <a href="/twitter" class="button-link">follow us on Twitter</a>
        <a href="/facebook" class="button-link">like us on Facebook</a>
        <a href="/sponsors" class="sponsor-link">become a sponsor</a>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContourColumnFlex"
}
</script>

<style scoped>

body {
  background-color: #eee;
  font-family: Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
}

header {
  color: #fff;
  background-color: #0072b0;
  border-radius: .5em;
  padding: 1em 1.5em; /* 增加内边距可以避免外边距折叠 */
}

.main {
  width: 70%;
  background-color: #ad9a9a;
  border-radius: 0.5em;
}

.sidebar {
  width: 30%;
  margin-left: 1.5em;
  padding: 1.5em;
  background-color: #ad9a9a;
  border-radius: 0.5em;
}

.button-link {
  display: block;
  padding: 0.5em;
  color: #fff;
  background-color: #0090C9;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.button-link + .button-link { /* 只给紧跟在其他button-link后面的button-link加上顶部外边距 */
  margin-top: 1.5em;
}

.sponsor-link {
  display: block;
  color: #0072b0;
  font-weight: bold;
  text-decoration: none;
}
</style>
