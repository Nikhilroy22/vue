<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios';

// reactive state

const post = ref('')
const isLoading = ref(false)
const time = ref('')


 function increment(){
 isLoading.value = true
  axios.get('student')
        .then(res => {
        
        
  post.value = res.data.posts
        console.log(res)
       // console.log(import.meta.env.VITE_SOME_KEY) // "123"
        isLoading.value = false
        });
        
    }
    function ppp(){
  axios.get('student')
        .then(res => {
  post.value = res.data.posts
        });
        
    }
// functions that mutate state and trigger updates

    function ddpost(njid) {
    
    if(confirm('are yoy sure')){
   
    axios.delete(`student/delete/${njid}`)
        .then(res => {
       // alert(res.data.message)
      
        ppp()
        });
    }
    };
    function getnow(){
    time.value = new Date();
    }


// lifecycle hooks
onMounted(() => {
getnow()
setInterval(getnow, 1000);
  
increment()
})
</script>

<template>
  <h1>{{time}}</h1>
  
 <p v-if="isLoading">Deleting...</p>
 
 <pre v-for="p in post" :key="p.id">
    <h2>{{ p.id }} - {{ p.name }}</h2>
    <RouterLink :to="{path: '/student/edit/'+p.id}">Edit</RouterLink>
    <button @click="ddpost(p.id)">Delete</button>
  </pre> 
</template>