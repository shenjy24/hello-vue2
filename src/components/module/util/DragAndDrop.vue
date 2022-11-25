<template>
  <div class="main">
    <div class="left">
      <img src="@/assets/logo.png">
      <img src="@/assets/logo.png">
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import dragula from "dragula";

export default {
  name: "DragAndDrop",

  mounted() {
    const left = document.getElementsByClassName("left")[0]
    const right = document.getElementsByClassName("right")[0]
    dragula([left, right])
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
}
.left {
  width: 40vw;
  height: 100vh;
  background-color: aqua;
}
.right {
  width: 40vw;
  height: 100vh;
  background-color: aquamarine;
}
</style>
