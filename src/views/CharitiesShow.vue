<template>
  <div class="charities-index">
    <div v-bind:key="charity.id" v-for="charity in charities">
    <h1>Charity name: {{charity.charity_name}}</h1>
    <h1>url : {{charity.url}}</h1>
    <h1>donation Url: {{charity.donation_url}}</h1>
    <h1>state: {{charity.state}}</h1>
    <h1>city: {{charity.city}}</h1>
    <h1>zip code: {{charity.zip_code}}</h1>
    <h1>score: {{charity.score}}</h1>
    <h1>category: {{charity.category}}</h1>
    <h1>deductibility: {{charity.deductibility}}</h1>
    <h1>Mission Statement: {{charity.mission_statement}}</h1>
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
      message: "Welcome to the Show!",
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

// post("/api/users", params)
//         .then(response => {
//           this.$router.push("/login");
//         })



* button to redirect for the added who you donated from chooser(show).... 
* links title to acess the charity website
* make (1/0 to yes or no deductible)
* make the forms better
* limit for page
* numeration under the page
* runs my db
* charity and what i do links works

