<template>
  
  <button v-if="user" @click="logout"><h1>Logout</h1></button>
  <RouterLink to="/login" v-else>Login</RouterLink>
  <h1 class="user" v-if="user">{{user.name}}</h1>
  
   <h1 class="recent">Recent Post</h1>
   
   <p v-if="isLoading" class="loading">Loading...</p>
 <div v-for="p in post" :key="p.id" v-else>
   <div class="post"><RouterLink :to="{path: '/'+p.slug}">{{ p.title }}</RouterLink>
  </div> 
  </div> 
  
   <h1 class="recent">Recent Post</h1>
   <div v-for="cat in categoryss" :key="cat.id">
   <pre><RouterLink :to="{path: '/category/'+cat.slug}">{{ cat.name }}</RouterLink></pre>
  
   </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref('');
const post = ref('')
const categoryss = ref('')
const isLoading = ref(false)

function increment(){
 isLoading.value = true
  axios.get('post')
        .then(res => {
  post.value = res.data.posts
        isLoading.value = false
        });
        
    };
    
    function category(){
  axios.get('category')
        .then(res => {
  categoryss.value = res.data.posts
       
        });
        
    };
    
    
  onMounted(() => {
  increment();
  category();
  axios.get('user', {
  headers: {
  Authorization: 'Bearer '+localStorage.getItem('token')
  }})
  .then(res => {
  user.value = res.data
  }).catch(error => {
  
  
  })
  });

 const logout = () => {
  localStorage.removeItem('token')
  location.href = '/login';
  };
  

</script>