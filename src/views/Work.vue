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


<div @click="show">menu</div>

<div class="nj" v-if="visibleLiveDemo">
  <span class="n2">
    <div class="head">menu</div>
  <ol>
    <il>Nikhil</il>
    <il>Nikhil</il>
    <il>Nikhil</il>
</ol>
    <span class="n3" @click="hide">X</span>
</span>
</div>



</template>

<style>

 </style>