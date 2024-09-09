<template>
  <div>
    
    
    <h1>Sports Odds</h1>
    <li v-for="kk in odds.bookmakers">
    <li v-for="nn in kk.markets">
    <li v-for="ii in nn.outcomes">
     {{ii.name}}
     

      <button class="button" @click="placeBet(ii.price)">{{ii.price}}</button>
     
     <hr>
     </li>
     </li>
     </li>
     
     
     <hr>
     <br>
     <br>
     <br>
        
    <!--<li v-for="(site, idx) in odd.bookmakers.markets." :key="idx">
            {{ site.site_nice }}: {{ site.odds.h2h.join(" / ") }}
            <button @click="placeBet(odds, site)">Place Bet</button>
          </li> -->
        
      <h1>Odds: {{ ppp }}</h1>
<h1>win tk: {{uuu}}</h1>  
  <input type="text" v-model="count" placeholder=" Bet amount type">
  </div>
  <button @click="betbet">Place Bet</button>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      odds: '',
      ppp: '',
    count: '12'
    };
  },
  
  computed: {
    // a computed getter
    uuu() {
      // `this` points to the component instance
      return this.count * this.ppp;
    }
  },
  
  created() {
    this.fetchOdds();
    
  },
  methods: {
    fetchOdds() {
      axios
        .get("https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=36a66c5bd0aab6a695ac9d919db3eae8")
        .then(response => {
          this.odds = response.data[1];
          console.log(response.data[1])
        })
        .catch(error => {
          console.error("Error fetching odds: ", error);
        });
    },
    placeBet(odds) {
      this.ppp = odds;
      console.log(this.uuu)
      // You would typically send this to your own server or another API
    },
    betbet(){
    alert(this.uuu)
    }
  },
};
</script>
<style>
  .button{
  color: red;
  
  }
  
</style>