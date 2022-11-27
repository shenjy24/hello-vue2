<template>
  <div>
    <img src="image/logo.png"/>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: "HelloVue"
}
</script>

<style scoped>
.background {
  background-image: url("http://localhost:28080/image/logo.png");
  background-size: 100% 100%;
  height: 100px;
  width: 100px;
}
</style>
