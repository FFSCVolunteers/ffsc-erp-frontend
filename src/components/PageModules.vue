<template>
  <div class="container">
    <h1 class="logo">Tính năng</h1>

    <div class='row'>
      <div class='col-3'>
        <img src="https://via.placeholder.com/200x200" class="img-thumbnail"/>
        <router-link to="/stats"><p>Thống kê</p></router-link>
      </div>
      <div class='col-3'>
        <img src="https://via.placeholder.com/200x200" class="img-thumbnail"/>
        <router-link to="/announcement"><p>Thông báo</p></router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PageModules',
  data () {
    return {
        input: {
            email: "",
            password: ""
        }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin-top: 150px;
  padding-left: 20px;
  padding-right: 20px;
}

input {
  margin-bottom: 10px;
  color: #C6C6C6;
  font-size: 1em;
}

.g-button {
  margin-top: 30px;
}
</style>
