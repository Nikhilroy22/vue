<template>
  <h1 v-for="cats in ccc" :key="cats.id">
  <div class="post"><RouterLink :to="{path: '/'+cats.slug}">{{cats.title}}</RouterLink>
  </div> 
  
  </h1>
  
</template>
<script setup>
  import axios from 'axios'
  import { useRoute } from "vue-router";
  import { ref, reactive,onMounted } from 'vue'
  const ccc = ref('');
  const route =useRoute()
  
  onMounted(() => {
 
  
  })
  
  
  function viewcat(slug){
  
  axios.get(`category/${slug}`).then(res => {
  
  ccc.value = res.data.cat;
  
  })
  .catch(error => {
  
    if(error.response.status == 404){
    
    alert(error.response.data.message)
    }
   
  })
  
  };
  viewcat(route.params.slug)
  
</script>