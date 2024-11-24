<template>
    <header>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/signup">Sign up</router-link>
    </nav>
    </header>
    <router-view />
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  header {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  background-color: orange;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 15px;
}

nav {
  display: flex; /* Align links horizontally */
  gap: 20px; /* Add spacing between links */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none; /* Optional: remove underlines */
}

nav a.router-link-exact-active {
  color: darkorange;
}
</style>
  