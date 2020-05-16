<template>
  <div>
  <header id="header">
  <h1>Charity Chooser</h1>
  <nav>
    <ul>
      <li><a href="intro">Charity</a></li>
      <li><a href="one">What I do</a></li>
      <li><a href="/charities">Chooser</a></li>
      <li><a href="/chosen">Who is Receving</a></li>
      <li><a href="/Login">Login</a></li>
      <li><a href="/Logout">Logout</a></li>
    </ul>
  </nav>
</header>
    <section id="intro" class="main style1 dark fullscreen">
  <div class="content">
    <header>
      <h2>Charity</h2>
    </header>
    <p>A system of giving money, food, or help free to those who are in need because they are sick, poor, or have no home, or any organization that has the purpose of providing money or helping in this way <a href="https://html5up.net/license"></a>.</p>
    <footer>
      <a href="#one" class="button style2 down">More</a>
    </footer>
  </div>
</section>

<section id="one" class="main style2 right dark fullscreen">
  <div class="content box style2">
    <header>
      <h2>What I Do</h2>
    </header>
    <p>Charity Chooser allows you to choose from virtually every registered charity in the US, as well as other organizations such as community groups which have a recognised charitable purpose</p>
  </div>
  <a href="#two" class="button style2 down anchored">Next</a>
</section>

<!-- Work -->
<section id="work" class="main style3 primary">
  <div class="content">
    <header>
    </header>

    <!-- Gallery  -->
      <div class="gallery">
        <article class="from-left">
          <a href="images/fulls/01.jpg" class="image fit"><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
        </article>
        <article class="from-right">
          <a href="images/fulls/02.jpg" class="image fit"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
        </article>
        <article class="from-left">
          <a href="images/fulls/03.jpg" class="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
        </article>
        <article class="from-right">
          <a href="images/fulls/04.jpg" class="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
        </article>
        <article class="from-left">
          <a href="images/fulls/05.jpg" class="image fit"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
        </article>
        <article class="from-right">
          <a href="images/fulls/06.jpg" class="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
        </article>
      </div>

  </div>
</section>

<!-- Contact -->
  <div class="signup">
  <div class="content">
    <header>
      <h2> Let's Help</h2>
      <h3>Signup</h3>
    </header>
     <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="box">
          <label>First name:</label> 
          <input type="text" class="form-control " v-model="first_name">
        </div>
        <div class="box">
          <label>Last name:</label> 
          <input type="text" class="form-control" v-model="last_name">
        </div>
        <div class="box">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="box">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
          <p> If you already have an account with the service provider, select Sign in with existing account.</p>
       </form>
     </div>
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

