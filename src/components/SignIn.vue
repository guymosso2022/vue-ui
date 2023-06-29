<template>
  <h1>Se Connecter</h1>
  <img class="logo" alt="login" src="../assets/login.png"/>
  <div class="login">
    <input type="email" v-model="email" placeholder="Email" name="email" />
    <input type="password" v-model="password" placeholder="Mot de Passe" name="password" />
    <button type="submit" v-on:click="SignIn">Connexion</button>
  </div>
</template>

<script>
  export default {
  name: "SignIn",
   data() {
    return {
      email: '',
      password: ''
    }
  }
  
}

 
</script>

<style>

</style>
