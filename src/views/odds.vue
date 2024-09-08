<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios';
// reactive state
const isLoading = ref(false);
const post = ref('')
const error = ref(null);
let intervalId = null;


// functions that mutate state and trigger updates
const increment = () => {
isLoading.value = true
  axios.get('https://api.api-tennis.com/tennis/?method=get_livescore&APIkey=fa9f73fe371f623fe52707031b9d40bd0c305227135e3860dab857ee8ef16542')
        .then(res => {
        post.value = res.data.result
        //pkk.value = res.data.result[0].pointbypoint
        
        console.log(res.data.result[0])
     
        })
        
        
        
    };
   
    


// lifecycle hooks
onMounted(() => {

increment();
// intervalId = setInterval(increment, 1000); // Fetch data every 5 seconds
 isLoading.value = false
});

onUnmounted(() => {
  clearInterval(intervalId); // Clean up the interval when the component is destroyed
});
</script>

<template>
  
 <div v-for="p in post">
    <h2>{{p.id}} </h2>
    <h2>{{p.tournament_name}} </h2>
   <br>
   <br>
    <div v-for="n in p.pointbypoint">
  <h1> jj:
  {{n.player_served}}
  </h1>
    
      </div>
    <hr/>
      </div>
</template>
<style>
  .clo{
  color: red;
  
  }
  
  
</style>