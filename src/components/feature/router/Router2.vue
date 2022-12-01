<template>
  <div>
    <p>用户：{{user.name}}</p>
    <p>年龄：{{user.age}}</p>
  </div>
</template>

<script>
export default {
  name: 'Router2',
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.$axios({
      method: 'post',
      url: '/user/getUserByName',
      data: {
        name: this.$route.query.name
      }
    }).then(response => {
      this.user = response
      console.log(response, 'success')
    }).catch(error => {
      console.log(error, 'error')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t {
  text-align: center;
}
</style>
