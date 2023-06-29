<template>
  <router-view />
</template>
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, { $myHttp: axios })
<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    postLogin(){
      this.$myHttp.post(`http://127.0.0.1:3333/cards`,{email: this.email, password: this.password}).then((response) => {
        console.log(response.data)
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
    width: 100px;
  }
  .login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-right: auto;
    margin-bottom: 30px;
    margin-left: auto;
    border: 1px solid skyblue;

  }

  .login button{
    width: 300px;
    height: 40px;
    background:  skyblue;
     border: 1px solid skyblue;
    color: #fff;
    cursor: pointer;
  }
</style>
