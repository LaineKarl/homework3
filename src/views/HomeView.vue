<template>
  <div>
    <header>
      <nav>
        <AppHeader />
      </nav>
    </header>
    <div class="parent">
      <!-- Left Sidebar -->
      <div class="div2">
        <p></p>
      </div>

      <!-- Main Content (Blog Posts) -->
      <div class="div5">
        <div class="post-list">
          <BlogPost v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="div4">
        <p></p>
      </div>
    </div>
    
  </div>
  <footer>
      <AppFooter/>
  </footer>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
    BlogPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("/data/PostInfo.json");
        this.posts = await response.json();
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
};
</script>

<style scoped>

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column; /* Stack header, main, and footer vertically */
  min-height: 100vh; /* Ensure it spans the viewport height */
  background-color: beige;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.parent {
  flex: 1; /* Let the main content grow to push footer down */
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
  padding: 20px;
}
@media (max-width: 768px) {
  .parent {
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      padding: 0;
      margin: 0;
  }
  .div2, .div4, .div5 {
        grid-column: span 3 / span 3;
    }
}

/* Left Sidebar */
.div2 {
  background-color: beige;
  padding: 15px;
  
}

/* Right Sidebar */
.div4 {
  background-color: beige;
  padding: 15px;
  
}

/* Main Content (Posts) */
.div5 {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

footer {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  background-color: orange;
  padding: 10px 20px;
  border-radius: 15px;
  width: 100%; /* Ensure the footer spans the full page width */
  box-sizing: border-box; /* Include padding in the width calculation */
  margin: 0 auto; /* Center footer horizontally */
}
</style>