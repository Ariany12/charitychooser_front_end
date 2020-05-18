<template>
  <div class="posts-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>Pleasw, I added info about the charity donated !!!</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Charity name:</label> 
          <input type="text" class="form-control" v-model="charity_name">
        </div>
        <div class="form-group">
          <label>State:</label>
          <input type="text" class="form-control" v-model="state">
        </div>
        <div class="form-group">
          <label>User name:</label>
          <input type="text" class="form-control" v-model="user_name">
        </div>
      
        <div class="form-group">
          <label>Amount donated :</label>
          <input type="text" class="form-control" v-model="amount_donated">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function(){
    return {
      charity_name: "",
      state: "",
      user_name: "",
      amount_donated: "",
      errors: []

    };
  },

  methods:{
    submit: function(){
      var params = {
        name: this.name,
        state: this.state,
        user_name: this.user_name,
        amount_donated: this.amount_donated,
      };
      axios
      .post("/api/chosen", params)
      .then(response => {
        this.$router.push("/chosen");
      
        })
        .catch(error => {
          this.errors = error.response.data.errors;
      });
    }
  }
};
</script>