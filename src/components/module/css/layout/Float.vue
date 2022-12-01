<template>
  <div class="container">
    <header>
      <h1>Franklin Running Club</h1>
    </header>

    <main class="main clearfix">
      <h2>Running tips</h2>

      <div>
        <div class="media">
          <img class="media-image" src="@/assets/image/shoes.png">
          <div class="media-body">
            <h4>Strength</h4>
            <p>
              Strength training is an important part of
              injury prevention. Focus on your core&mdash;
              especially your abs and glutes.
            </p>
          </div>
        </div>

        <div class="media">
          <img class="media-image" src="@/assets/image/runner.png">
          <div class="media-body">
            <h4>Cadence</h4>
            <p>
              Check your stride turnover. The most efficient
              runners take about 180 steps per minute.
            </p>
          </div>
        </div>

        <div class="media">
          <img class="media-image" src="@/assets/image/runner.png">
          <div class="media-body">
            <h4>Change it up</h4>
            <p>
              Don't run the same every time you hit the
              road. Vary your pace, and vary the distance
              of your runs.
            </p>
          </div>
        </div>

        <div class="media">
          <img class="media-image" src="@/assets/image/shoes.png">
          <div class="media-body">
            <h4>Focus on form</h4>
            <p>
              Run tall but relaxed. Your feet should hit
              the ground beneath your hips, not out in
              front of you.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Float"
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
  background-color: #eee;
  font-family: Helvetica, Arial, sans-serif;
  max-width: 1080px;
  margin: 0 auto; /* 居中布局 */
}

*,
::before,
::after {
  box-sizing: inherit;
}

.container * + * {
  margin-top: 1.5em;
}

header {
  padding: 1em 1.5em;
  color: #fff;
  background-color: #0072b0;
  border-radius: 0.5em;
  margin-bottom: 1.5em;
}

.main {
  padding: 0 1.5em;
  background-color: #fff;
  border-radius: 0.5em;
}

.media {
  float: left;
  margin: 0 1.5em 1.5em 0;
  width: calc(50% - 1.5em);
  padding: 1.5em;
  background-color: #eee;
  border-radius: 0.5em;
}

.clearfix::before,
.clearfix::after {   /* 清除外边距折叠 */
  display: table;
  content: " ";
}

.clearfix::after {
  clear: both;
}

.media:nth-child(odd) { /* 每个新行清除了上面一行的浮动 */
  clear: left;
}

.media-image {
  float: left;
  margin-right: 1.5em;
}

.media-body {
  overflow: auto; /* 创建一个新的BFC，这样正文就不会跟浮动的图片重叠 */
  margin-top: 0;  /* 删除猫头鹰选择器所添加的顶部外边距 */
}

.media-body h4 {
  margin-top: 0;  /* 覆盖默认样式所添加的顶部外边距 */
}
</style>
