<template>
  <div>
    <h1>Real-Time Updates</h1>
    <p v-if="loading">Connecting...</p>
    <ul v-if="!loading">
      <li v-for="item in data" :key="item.id">{{ item.name }} - {{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);
    let socket;

    const connectWebSocket = () => {
      socket = new WebSocket('wss://jsonplaceholder.typicode.com/todos/1');
      
      socket.onopen = () => {
        loading.value = false;
      };

      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        data.value = parsedData; // Update with new data from WebSocket
      };

      socket.onclose = () => {
        console.log('WebSocket closed');
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    };

    onMounted(() => {
      connectWebSocket();
    });

    onUnmounted(() => {
      if (socket) {
        socket.close(); // Close WebSocket connection when component is unmounted
      }
    });

    return { data, loading };
  }
};
</script>
