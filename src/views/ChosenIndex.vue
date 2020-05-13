<template>
  <div class="chosen - index">
    <h1>{{ message }}</h1>
    <div v-bind:key="chosen.id" v-for="chosen in chosens">
    <p>id: {{chosen.id}}</p>
    <!-- <p>charityName: <a v-bind:href="`/posts/${charity.charityName}`">{{ charity.charityName}}</a></p> -->
    <p>user_id : {{chosen.user_id}}</p>
    <p>charity_id: {{chosen.charity_id}}</p>
    <p>donated_amount: {{chosen.donated_amount}}</p>    
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
      message: "Who is receiving",
      chosens: []
    };
  },
  created: function() {
    axios.get('/api/chosenones').then(response =>{
      console.log(response.data)
      this.chosens = response.data
    })
  },
  methods: {}
};
</script>

