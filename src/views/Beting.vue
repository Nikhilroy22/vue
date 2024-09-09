<template>
  <div>
    
    
    <h1>Sports Odds</h1>
    <li v-for="kk in odds.bookmakers">
    <li v-for="nn in kk.markets">
    <li v-for="ii in nn.outcomes">
     {{ii.name}}
     

      <button class="button" @click="placeBet(ii)">{{ii.price}}</button>
     
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
        
  </div>
  <div v-if="show">
      <h1>Odds: {{ ppp }}</h1>
<h1>win tk: {{uuu}}</h1>  
  <input type="text" v-model="count" placeholder=" Bet amount type">
  <button @click="betbet">Place Bet</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      odds: '',
      ppp: '',
    count: '12',
    show: false
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
          this.odds = response.data[5];
         
         const pp = 1;
          console.log(response.data[pp])
        })
        .catch(error => {
          console.error("Error fetching odds: ", error);
        });
    },
    placeBet(odds) {
  //  if(confirm('are yoy sure')){}
      this.show = true
      this.ppp = odds.price;
      setInterval(this.ppp, 1000);
      console.log(this.ppp)
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