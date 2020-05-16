<template>
<div id="app">

<router-view/>
<header id="header">
  <h1>Charity Chooser</h1>
  <nav>
    <ul>
      <li><a href="intro">Charity</a></li>
      <li><a href="one">What I do</a></li>
      <li><a href="/charities">Chooser</a></li>
      <li><a href="/chosen">Who is Receving</a></li>
      <!-- <li><a href="/Signup">Signup</a></li> -->
      <li><a href="/Login">Login</a></li>
      <li><a href="/Logout">Logout</a></li>
    </ul>
  </nav>
</header>
    <!-- <section id="intro" class="main style1 dark fullscreen">
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
</section> -->

<footer id="footer">

  <!-- Icons -->
    <ul class="icons">
      <li><a href="http://charityapi.orghunter.com/" <i class="fas fa-cogs"></i> OrgHunter</span></a></li>  
    </ul>
  <!-- Menu -->
    <ul class="menu">
      <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
    </ul>

</footer>

</div>
</template>


<style>
	#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

