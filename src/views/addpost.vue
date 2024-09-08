<template>
    <div class="root">
      <form @submit.prevent="getnj
">
  <input type="text" class="logininput" v-model="nikhil.name"placeholder="name">
         <p v-if="kk">{{ kk }}</p>
  <input type="text" class="logininput" v-model="nikhil.email" placeholder="email">
  <p v-if="vv">{{ vv }}</p>
  <input type="text" class="logininput" v-model="nikhil.phone" placeholder="phone">
    <p v-if="pp">{{ pp }}</p>
     <i v-if="isLoading">Loading...</i>
  <button class="loginbutton" v-else>Add Post</button>
  </form>
  </div>
</template>
<script setup>
  import { ref, reactive } from 'vue'
import axios from 'axios'
import swal from 'sweetalert2'

const vv = ref()
const kk = ref()
const pp = ref(null)
const isLoading = ref(false)

   const nikhil = reactive({ name: '', email: '', phone: '',})
  
 function getnj() {
    isLoading.value = true
    axios.post('student', {
    name: nikhil.name,
    email: nikhil.email,
    phone: nikhil.phone,
  })
  .then(response => {
  
    console.log(response);
    if(response.data.message){
    
    swal.fire(response.data.message)
    }
    
  })
  .catch(error => {
  
    
    
   vv.value = error.response.data.message.email;
   kk.value = error.response.data.message.name;
   pp.value = error.response.data.message.phone;
  
   
  })
  .finally(() => {
  isLoading.value = false
  return
  })
    }
  

</script>
<style>
  p{
  color: red;
  }
  
</style>