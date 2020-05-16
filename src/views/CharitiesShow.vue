<template>
  <div class="charities - index">
    <div v-bind:key="charity.id" v-for="charity in charities">
    <h1>{{ message }}</h1>
    <h1>id: {{charity.id}}</h1>
    <h1>charityName: {{charity.name}}</h1>
    <h1>url : {{charity.url}}</h1>
    <h1>donationUrl: {{charity.donationUrl}}</h1>
    <h1>state: {{charity.state}}</h1>
    <h1>city: {{charity.city}}</h1>
    <h1>zipCode: {{charity.zipCode}}</h1>
    <h1>score: {{charity.score}}</h1>
    <h1>acceptingDonations: {{charity.acceptingDonations}}</h1>
    <h1>category: {{charity.category}}</h1>
    <h1>deductibilityCd: {{charity.deductibilityCd}}</h1>
    <h1>missionStatement: {{charity.missionStatement}}</h1>
  </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
// import axios from "..../CharitiesIndex..vue"

export default {
  data: function() {
    return {
      message: "Welcome to the Show!",
      charities: {}
    };
  },
  created: function() {
    console.log(this.charities)
    axios.get(`/api/charities?name=${this.name}&state=${this.state}&city=${this.city}&zipcode=${this.zipcode}&score=${this.score}&deductibility=${this.deductibility}`).then(response => {
      console.log(response.data)
      this.charities = response.data
    })
  },
  methods: {}
};
</script>
