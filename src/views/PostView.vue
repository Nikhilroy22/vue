<template>
    
  <h1>{{$route.params.id}}</h1>
  <div class="postview">
  <h1>{{nikhil.title}}</h1>
  <h1>{{nikhil.body}}</h1>
  
  </div>

</template>

<script>
import axios from 'axios'
export default {
data () {
    return {
      nikhil: {
      title: '',
      body: '',
      
      }
    }
  },
  mounted(){
  //console.log(this.$route.params.id)
//  this.namejj = this.$route.params.id;
 this.getdata(this.$route.params.id);
  },
  methods: {
  getdata(name){
  axios.get(`post/${name}`).then(res => {
  console.log(res.data)
  this.nikhil = res.data.student
  })
  .catch(error => {
  
    if(error.response.status == 404){
    
    alert(error.response.data.message)
    }
   
  })
  
  },
   
  }
}
</script>