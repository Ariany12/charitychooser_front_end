<template>
  <div class="charities - index">
    <h1>{{ message }}</h1>
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
      message: "All Charities",
      charities: []
    };
  },
  created: function() {
    axios.get('/api/charities').then(response =>{
      console.log(response.data)
      this.posts = response.data
    })
  },
  methods: {}
};
</script>

