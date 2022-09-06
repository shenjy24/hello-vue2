<template>
  <div class="container">
    <div class="view"></div>
    <div class="error"></div>
    <div class="seriousError"></div>
  </div>
</template>

<script>
export default {
  name: "ScssStyle"
}
</script>

<style lang="scss" scoped>
// 声明变量
$bg-color: #42b983;

@mixin border-radius {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  color: red;
}

// 函数
@mixin get-border-radius($border-radius:5px, $color:red) {
  -moz-border-radius: $border-radius;
  -webkit-border-radius: $border-radius;
  border-radius: $border-radius;
  color: $color;
}

// 定义被继承的样式
%div-style {
  width: 80vw;
  height: 20vh;
  background-color: $bg-color;
  margin: auto;
}

.container {
  .view {
    @extend %div-style;

    border: 1px solid black;
    @include get-border-radius(100px, red); // 调用函数
  }

  .error {
    @extend %div-style;
  }

  .seriousError {
    @extend .error;     // 继承
    border: 1px solid royalblue;
  }
}
</style>
