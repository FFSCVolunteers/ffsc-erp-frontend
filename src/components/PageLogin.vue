<template>
  <div class="container">
    <h1 class="logo">FFSC Erp</h1>

    <div class="slogan">Hệ thống quản lý nội bộ dành cho tổ chức FFSC</div>    

    <form class="">

      <input type="email" v-model="input.email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email">
      <input type="password" v-model="input.password" class="form-control" id="passwordInput" aria-describedby="" placeholder="Password">

      <div class="g-button" v-on:click="login()">
        Đăng nhập
      </div>

<!--       <div class="text-center" >
        <router-link to="/e-forgot-pass"><p>Quên mật khẩu?</p></router-link>
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
        input: {
            email: "",
            password: ""
        }
    }
  },
  methods: {
    login() {
        let data = {
          email: this.input.email,
          password: this.input.password
        }
        this.$store
          .dispatch('login', data)
          .then(() => this.$router.push({ path: 'stats'}))
          .catch(err => {
            alert(err)
            console.log(err)
          })

        // this.$router.push({ path: 'stats'});
    }
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
