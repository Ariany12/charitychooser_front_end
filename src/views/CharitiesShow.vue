<template>
  <div class="charities-index">
    <div v-bind:key="charity.id" v-for="charity in charities">
    <h1> {{charity.charity_name}}</h1>
     <a :href="charity.url">
    {{ charity.url}}
    </a>
    <p>
     <a :href="charity.donation_url">
    {{ charity.donation_url}}
    </a>
    <h1>State: {{charity.state}}</h1>
    <h1>City: {{charity.city}}</h1>
    <h1>Zip code: {{charity.zip_code}}</h1>
    <h1>Score: {{charity.score}}</h1>
    <h1>Category: {{charity.category}}</h1>
    <h1>Deductibility: {{charity.deductibility}}</h1>
    <!-- <h1>Mission Statement: {{charity.mission_statement}}</h1> -->
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
      charities: [],
      query: {}
    };
  },

  created: function() {
     console.log(this.$route.query.state)
    axios.get(`/api/charities?name=${this.$route.query.name}&state=${this.$route.query.state}&city=${this.$route.query.city}&zipcode=${this.$route.query.zipcode}&score=${this.$route.query.score}&deductibility=${this.$route.query.deductibility}`).then(response => {
      console.log(response.data)
      this.charities = response.data
    })
  },
  methods: {}
};
</script>
