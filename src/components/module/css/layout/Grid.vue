<template>
  <div>
    <span>foo</span>
    <div id="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
    <span>bar</span>
  </div>
</template>

<script>

export default {
  name: 'Grid',
  data() {
    return {}
  },
  methods: {
    updateMsg(msg) {
      this.msg = msg
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  font-size: 2em;
}

#container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;  /* 此处定义了4列 */
  grid-template-rows: 50px 50px 50px;   /* 此处定义了3行 */
  grid-row-gap: 20px; /* 行间距 */
  grid-column-gap: 20px; /* 列间距 */
  grid-template-areas: 'a a a a'
                       'b b b b'
                       'c';
  grid-auto-flow: column; /* 默认先行后列填充 */
}

.item {
  font-size: 2em;
  text-align: center;
  border: 1px solid #e5e4e9;
}

.item-1 {
  background-color: #ef342a;
  grid-column-start: 1;   /* 占据第一根网格垂直线到第三根网格垂直线之间的两格 */
  grid-column-end: 3;
  justify-self: center;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>
