<script setup>
  import axios from 'axios'
  import {ref,onMounted} from 'vue'
  const dd = ref('');
const res = await axios.get('http://localhost:8000/api/post');

console.log(res.data.posts);
dd.value = res.data.posts;


</script>

<template>
  <div v-if="dd">{{ dd }}</div>
</template>