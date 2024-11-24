<template>
    <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign up</router-link>
    </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>
  
<style>

  
  header {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  background-color: orange;
  padding: 15px 20px;
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

</style>
  