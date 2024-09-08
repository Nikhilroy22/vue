<script setup>
  import swal from 'sweetalert2'
import { ref, onMounted,computed  } from 'vue'
import axios from 'axios';

// reactive state
const post = ref('')
const count = ref('')
const count2 = ref(0)

function ppp(){
  axios.get('student')
        .then(res => {
  post.value = res.data.posts
        })}
count2.value = 1.7;


const plusOne = computed(() => 
count.value * count2.value)



function nikhil(){
swal.fire('Bet Success')
console.log(plusOne.value)
}



onMounted(() => {
ppp()
})
</script>

<template>
 
  
  <div v-for="p in post" :key="p.id">
     
  <input type="text" v-model="count" placeholder=" Bet amount type">
  
  <br>
  <button @click="nikhil">Bet place</button>
  <br>
    <h2>win tk: {{ plusOne }}</h2>
  <br>
 <h1>odds:  {{count2}}</h1>
  
    <h2>{{ p.name }}</h2>
    <hr>
  </div> 
</template>
<style>
  div{
  text-align: center;
  }
  
</style>