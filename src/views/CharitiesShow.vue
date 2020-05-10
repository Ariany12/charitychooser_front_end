<template>
  <div class="charities-show">
    <h1>{{ message }}</h1>
    <h1>id: {{charity.id}}</h1>
    <h1>charityName: {{charity.charityName}}</h1>
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
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to the Show!",
      charity: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id)
    axios.get('/api/charities/' + this.$route.params.id).then(response => {
      console.log(response.data)
      this.charity = response.data
    })
  },
  methods: {}
};
</script>
