<template>
  <div>
    <header>
      <nav>
        <AppHeader />
      </nav>
    </header>
    <div class="parent">
      <!-- left sidebar -->
      <div class="div2">
        <p></p>
      </div>

      <!-- main content -->
      <div class="div5">
        <div class="post-list">
          <BlogPost 
          v-for="post in posts" 
          :key="post.id" 
          :post="post" 
          ref="blogPosts" />
        </div>
      </div>

      <!-- right sidebar -->
      <div class="div4">
        <p></p>
      </div>
    </div>

    <!-- reset the likes -->
    <div class="reset-container">
      <button @click="resetLikes" class="reset-button">Reset All Likes</button>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BlogPost from "@/components/BlogPost.vue";
import { ref } from 'vue';

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
  setup() {
// reactive reference to track the blog posts
    const blogPostRefs = ref([]);
    return { blogPostRefs };
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
    resetLikes() {
      if (Array.isArray(this.$refs.blogPosts)) {
        this.$refs.blogPosts.forEach((blogPost) => {
          blogPost.resetLikeCount();
        });
      } else {
        console.error("BlogPost refs are not properly populated.");
      }
    }
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

.div2 {
  background-color: beige;
  padding: 15px;
  
}

.div4 {
  background-color: beige;
  padding: 15px;
  
}

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

.reset-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.reset-button {
  background-color: #ff5722;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.reset-button:hover {
  background-color: #e64a19;
}
</style>