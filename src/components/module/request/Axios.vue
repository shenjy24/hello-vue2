<template>
  <div>
    <table class="t">
      <tr v-for="u in users">
        <td>{{ u.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Axios',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$axios({
      method: 'post',
      url: '/user/listUser',
      data: {}
    }).then(response => {
      this.users = response
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
