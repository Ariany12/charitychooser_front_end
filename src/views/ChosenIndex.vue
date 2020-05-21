<template>
  <div class="chosen - index">
    <div v-bind:key="chosen.id" v-for="chosen in chosens">
    <!-- <p>id: {{chosen.id}}</p> -->
    <!-- <p>charityName: <a v-bind:href="`/posts/${charity.charityName}`">{{ charity.charityName}}</a></p> -->
    <p>Donor name : {{chosen.user_name}}</p>
    <p>Charity name: {{chosen.charity_name}}</p>
    <p>Charity state: {{chosen.state}}</p>
    <p>Donated amount: {{chosen.donated_amount}}</p>    
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
      chosens: []
    };
  },
  created: function() {
    axios.get('/api/chosen').then(response =>{
      console.log(response.data)
      this.chosens = response.data
      
    })
  },
  methods: {}
};
</script>

