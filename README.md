<template>
  <p v-if="isLoading">Loading...</p>

  <div v-for="p in post" :key="p.id">
    <h2>{{ p.id }} - {{ p.name }}</h2>
    <RouterLink :to="{path: '/student/edit/'+p.id}">Edit</RouterLink>
    <button @click="ddpost(p.id)">Delete</button>
  </div>
</template>

<script>
  import  axios  from 'axios';
export default {
  data() {
    return {
      post: [],
      isLoading: false
    }
  },
  methods: {
    getPosts() {
      this.isLoading = true

      axios.get('http://localhost:8000/api/student')
        .then(res => {
        this.post = res.data.posts
        console.log(this.post)
        this.isLoading = false
        });
    },
    ddpost(njid) {
    console.log(njid);
    if(confirm('are yoy sure')){
    axios.delete(`http://localhost:8000/api/student/delete/${njid}`)
        .then(res => {
        alert(res.data.message)
        this.getPosts()
        });
    }
    }
    
    
  },
  mounted() {
    this.getPosts()
     
//  setInterval(this.getPosts, 1000); 
  // Fetch data every minute (adjust the interval as needed) 

  }
}
</script>