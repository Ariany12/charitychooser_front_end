<template>
  <div class="charities - index">
    Charity name: <input type="text" v-model="name">
    State: <input type="text" v-model="state">
    City: <input type="text" v-model="city">
    Zipcode: <input type="text" v-model="zipcode">
    Score: <input type="text" v-model="score">
    Deductibility : <input type="text" v-model="deductibility">
   <p><button v-on:click="Search()">charity_chooser</button></p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"; 


export default {

  data: function() {
    return {
      charities: [],
      name: "",
      state: "",
      city: "",
      zipcode: "",
      score: "",
      deductibility: "",
      search: "",
      errors: [],
      query: {}
    };
  },

  methods: {
    Search: function(){
      console.log(this.name)
      var params = {
        charity_name: this.name,
        state: this.state,
        city: this.city,
        zipcode: this.zipcode,
        score: this.score,
        deductibility: this.deductibility
      };
      axios.get(`/api/charities?name=${this.name}&state=${this.state}&city=${this.city}&zipcode=${this.zipcode}&score=${this.score}&deductibility=${this.deductibility}`).then(response => {
        console.log(response.data);
         this.$router.push(`/charities-show?name=${this.name}&state=${this.state}&city=${this.city}&zipcode=${this.zipcode}&score=${this.score}&deductibility=${this.deductibility}`)
          
        
      });
    }
  } 
};
</script><!-- Work -->

