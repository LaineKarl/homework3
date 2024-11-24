<template>
    <div class="post">
      <h2>
        <img :src="post.profile_picture || 'public/images/me.png'" alt="Profile" />
        <span>{{ post.created || 'Unknown Date' }}</span>
      </h2>
      <div v-if="post.photo">
        <img :src="post.photo" alt="Post Image" class="post-image" />
      </div>
      <p>{{ post.comment || 'No content available' }}</p>
      <img src="public/images/like2.png" alt="Like" class="like-button" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Post',
    props: {
      post: Object, // The post object will be passed as a prop to this component
    },
  };
  </script>
  
  <style scoped>
  .post {
    margin-bottom: 20px;
  }
  
  .like-button {
    cursor: pointer;
  }
  
  .post-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  