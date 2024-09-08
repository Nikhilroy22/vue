<template>
  
   <div class="root">
<form @submit.prevent="login">
  <input class="logininput" type="text" v-model="nkh.email" placeholder="email">
  <input class="logininput" type="password" v-model="nkh.password" placeholder="password">
   <p v-if="isLoading">Loading...</p>
  <button class="loginbutton" v-else>Login</button>
  </form>
  </div>
 
  
</template>
<script setup>
  import axios from 'axios'
  import router from '../router/index'
  import { ref, reactive } from 'vue'
  
  
 // const ppp = reactive({type: 'nikhil',
//  message: 'puja',})
  
  const nkh = reactive({email: '',
  password: '',})
  const isLoading = ref(false)
  
  
  
  const login =() => {
  isLoading.value = true
  axios.post('login',{
  email: nkh.email,
  password: nkh.password,
  })
  .then(response => {
  
    console.log(response);
     localStorage.setItem('token', response.data.data.token);
        location.href = '/';
  })
  .catch((error) => {
 // alert(error.response.data.message);
  alert('Faild Login')
  console.log(error)
  })
  .finally(() => {
  isLoading.value = false
  })
  
};
  
</script>