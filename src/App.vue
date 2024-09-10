<template>
  <header>
    
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


        <div class="nav-container">
          
            <span class="logo">NavBar</span>
           
                <ul class="nav--ul__two">
                    <span class="nav-liunk">Login</span>
                    <span class="nav-linuk">Signup</span>
                    <i class="material-icons navii">account_circle</i>
                   <span style="font-size:25px;cursor:pointer" @click="show">&#9776;</span>
                </ul>
                
        </div>
        
</header>
  
  <RouterView />
  
  <footer>
    <div class="nav">
      <RouterLink to="/" class="nav-link link-active">
        <i class="material-icons nav-icon">dashboard</i>
        <span class="nav-text">Dashboard</span>
      </RouterLink>
      <RouterLink to="/addpost" class="nav-link">
        <i class="material-icons nav-icon">account_circle</i>
        <span class="nav-text">Profile</span>
     </RouterLink>
     
      <RouterLink to="/bet" class="nav-link">
        <i class="material-icons nav-icon">lock</i>
        <span class="nav-text">privacy</span>
     </RouterLink>
      <RouterLink to="/login" class="nav-link">
        <i class="material-icons nav-icon">settings</i>
        <span class="nav-text">setting</span>
      </RouterLink>
    </div>
    
    
  </footer>
  
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
   import { ref } from 'vue'
  const visibleLiveDemo = ref(false)
  function show(){
  visibleLiveDemo.value = true
  
  }
  function hide(){
  visibleLiveDemo.value = false
  
  }
 
 </script>

