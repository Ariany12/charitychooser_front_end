<template>
  <div class="charities - index">
    <h1>{{ message }}</h1>
    Charity name: <input type="text" v-model="name">
    State: <input type="text" v-model="state">
    City: <input type="text" v-model="city">
    Zipcode: <input type="text" v-model="zipcode">
    Score: <input type="text" v-model="score">
    Deductibility : <input type="text" v-model="deductibility">
   <p><button v-on:click="Search()">charity_chooser</button></p>

    
    <div v-bind:key="charity.id" v-for="charity in charities">
    <p>id: {{charity.id}}</p>
    <p>charityName: <a v-bind:href="`/posts/${charity.charityName}`">{{ charity.charityName}}</a></p>
    <p>url : {{charity.url}}</p>
    <p>donationUrl: {{charity.donationUrl}}</p>
    <p>state: {{charity.state}}</p>
    <p>city: {{charity.city}}</p>
    <p>zipCode: {{charity.zipCode}}</p>
    <p>score: {{charity.score}}</p>
    <p>acceptingDonations: {{charity.acceptingDonations}}</p>
    <p>category: {{charity.category}}</p>
    <p>deductibilityCd: {{charity.deductibilityCd}}</p>
    <p>missionStatement: {{charity.missionStatement}}</p>
    <hr>
    </div>

</div>
</template>

<style>


</style>

<script>
import axios from "axios"; 


export default {

  data: function() {
    return {
      message: "Chooser",
      charities: [],
      name: "",
      state: "",
      city: "",
      zipcode: "",
      score: "",
      deductibility: "",
      search: "",
      errors: []
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
         this.$router.push("/charities-show")
         this.charities = response.data 
        
      });
    }
  } 
};
</script>

