<template>
  <header>
        <div class="nav-container">
            <span class="logo">NavBar</span>
           
                <ul class="nav--ul__two">
                    <span class="nav-liunk">Login</span>
                    <span class="nav-linuk">Signup</span>
                    <i class="material-icons navii">account_circle</i>
                    <div class="icons8-menu"></div>
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
 
 
 </script>

