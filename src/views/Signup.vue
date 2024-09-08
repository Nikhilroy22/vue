<template>
 <div class="root">
<form @submit.prevent="signup">
  <input class="logininput" type="text" placeholder="Name" v-model="reg.name">
  <input class="logininput" type="text" placeholder="Email" v-model="reg.email">
  <input class="logininput" type="password" placeholder="Password" v-model="reg.password">
  
  <button class="loginbutton">Sign Up</button>
  </form>
  </div>
 
</template>

<script setup>
  import axios from 'axios'
  import {ref, reactive} from 'vue'
  
  const reg = reactive({
  name: '',
  email: '',
  password: '',
  
  });
  
  
  const signup = () => {
  axios.post('reg',{name: reg.name,
  email: reg.email,
  password: reg.password})
  .then(res => {
  alert(res.data.message)
  $route.push('/')
  })
  .catch(error => {
  console.log(error)
  })
  }
</script>