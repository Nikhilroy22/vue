<template>
  <h1>{{$route.params.id}}</h1>
     <div class="root">
  <form @submit.prevent="upgetnj">
  <input class="logininput" type="text" v-model="nikhil.name">
  <input class="logininput" type="text" v-model="nikhil.email">
  <input class="logininput" type="text" :value="nikhil.phone" />
  <button class="loginbutton">Post Update</button>
  </form>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
data () {
    return {
    namejj: '',
      nikhil: {
      name: '',
      email: '',
      phone: '',
      }
    }
  },
  mounted(){
  //console.log(this.$route.params.id)
  this.namejj = this.$route.params.id;
 this.getdata(this.$route.params.id);
  },
  methods: {
  getdata(name){
  axios.get(`student/edit/${name}`).then(res => {
  console.log(res.data)
  this.nikhil = res.data.student
  })
  .catch(error => {
  
    if(error.response.status == 404){
    
    alert(error.response.data.message)
    }
   
  })
  
  },
    upgetnj() {
    
    axios.put(`student/edit/${this.namejj}`, {
    name: this.nikhil.name,
    email: this.nikhil.email,
    phone: this.nikhil.phone,
  })
  .then(response => {
    
    if(response.data.message){
    alert(response.data.message);
    }
  })
  .catch(error => {
    
   
  });
  
    
    
    }
  }
}
</script>