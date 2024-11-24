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
    <AppFooter />
  </div>
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

.parent {
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
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Right Sidebar */
.div4 {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>