import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router/index'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', credentials);
        console.log(response);
        this.user = response.data.data;
        this.token = response.data.data.token;
        localStorage.setItem('token', this.token);
        router.push('/');
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },
    async fetchUser() {
      try {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: {
  Authorization: 'Bearer ' + localStorage.getItem('token')
  
  },
        });
        this.user = response.data
        console.log(response)
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    },
     increment(kkpost){
//isLoading.value = true
  axios.get('http://localhost:8000/api/student')
        .then(res => {
  // kkpost = res.data.posts
        console.log(res)
        console.log(import.meta.env.VITE_SOME_KEY) // "123"
      //  isLoading.value = false
        });
        
    }
    
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
