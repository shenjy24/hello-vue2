<template>
  <div>
    <img src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Transition"
}
</script>

<style scoped>
  img {
    width: 15px;
    height: 15px;
    transition: 1s height cubic-bezier(.83,.97,.05,1.44), 1s 1s width;
  }

  img:hover {
    height: 450px;
    width: 450px;
  }
</style>
