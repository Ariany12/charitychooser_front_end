<template>
<div id="app">
<header id="header">
  <h1>Charity Chooser</h1>
  <nav>
    <ul>
      <li><a href="#Charity">Charity</a></li>
      <li><a href="#WhatIdo">What I Do</a></li>
      <li><a href="#Chooser">Chooser</a></li>
      <li><a href="#Whoisreceiving">Who is receing</a></li>
      <li><a href="#Signup">Signup</a></li>
      <li><a href="#Login">Login</a></li>
      <li><a href="#Logout">Logout</a></li>
    </ul>
  </nav>
</header>
<router-view/>

<footer id="footer">

  <!-- Icons -->
    <ul class="icons">
      <li><a href="#" <i class="fas fa-cogs"></i> OrgHunter</span></a></li>  
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

