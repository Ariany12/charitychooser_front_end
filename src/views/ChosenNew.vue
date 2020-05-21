<template>
  <div class="chosen-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>You just donated Great!! please let us know for which Charity</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Charity name</label> 
          <input type="text" class="form-control" v-model="charity_name">
        </div>
        <div class="form-group">
          <label>Charity State</label>
          <input type="text" class="form-control" v-model="state">
        </div>
        <div class="form-group">
          <label> Your full name</label>
          <input type="text" class="form-control" v-model="user_name">
        </div>
      
        <div class="form-group">
          <label>Amount donated </label>
          <input type="text" class="form-control" v-model="donated_amount">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      charity_name: "",
      state: "",
      user_name: "",
      donated_amount: "",
      errors: []
    

    };
  },

  methods:{
      submit: function() {
      var params = {
        name: this.charity_name,
        state: this.state,
        user_name: this.user_name,
        donated_amount: this.donated_amount
      };

      axios.post("/api/chosen", params)
      .then(response => {
        this.$router.push("/chosen");
        // console.log (response.data)
      
        })
        .catch(error => {
          this.errors = error.response.data.errors;
      });
    }
  }
};
</script>