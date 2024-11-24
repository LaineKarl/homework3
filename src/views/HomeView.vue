<template>
    <div>
      <AppHeader />
      <div class="parent">
        <div class="div2"></div>
        <div class="div4"></div>
        <div class="div5">
          <div class="post-list">
            <!-- Correct the component name to BlogPost -->
            <BlogPost v-for="post in posts" :key="post.id" :post="post" />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import BlogPost from '@/components/BlogPost.vue'; // Import the BlogPost component
  
  export default {
    name: 'HomeView',
    components: {
      AppHeader,
      AppFooter,
      BlogPost, // Register the BlogPost component
    },
    data() {
      return {
        posts: [], // This will store the fetched posts
      };
    },
    mounted() {
      this.fetchPosts(); // Fetch posts when the component is mounted
    },
    methods: {
        async fetchPosts() {
  try {
    const response = await fetch('/data/PostInfo.json'); // Correct path for public folder
    const posts = await response.json();
    this.posts = posts; // Set the posts data to Vue's reactive data
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

    },
  };
  </script>
  
  <style scoped>
  .post-list {
    margin-top: 20px;
  }
  </style>
  