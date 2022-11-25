<template>
  <div class="view"></div>
</template>

<script>
export default {
  name: "Animation"
}
</script>

<style scoped>
.view {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.view:hover {
  animation: rainbow 1s infinite;
}

@keyframes rainbow {
  0% {
    background: #c00;
  }
  50% {
    background: orange;
  }
  100% {
    background: yellowgreen;
  }
}
</style>
