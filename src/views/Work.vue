<script setup>
  import { ref } from 'vue'
  const visibleLiveDemo = ref(false)
  function show(){
  visibleLiveDemo.value = true
  
  }
  function hide(){
  visibleLiveDemo.value = false
  
  }
</script>
<template>
  <button color="primary" @click="show">Launch demo modal</button>
  
  <div v-if="visibleLiveDemo">
    
      <div class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="hide">&times;</span>
     <h1>Odds: {{ ppp }}</h1>
<h1>win tk</h1>  
  <input type="text" placeholder=" Bet amount type">
  <button @click="betbet">Place Bet</button>
  </div>
  </div>
  </div>
  
</template>

<style setup>

/* The Modal (background) */
.modal {
align-items: center; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  bottom: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
  .close:hover,
.close:focus {
  color: #b1279b00;
  text-decoration: none;
  cursor: pointer;
}
  
  </style>