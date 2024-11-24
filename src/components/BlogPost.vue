<template>
    <div class="post">
      <h2>
        <img :src="post.profile_picture || '/images/me.png'" alt="Profile" />
        <span>{{ post.created || 'Unknown Date' }}</span>
      </h2>
      <div v-if="post.photo">
        <img :src="post.photo" alt="Post Image" class="post-image" />
      </div>
      <p>{{ post.comment || 'No content available' }}</p>
      <img src="/images/like2.png" alt="Like" class="like-button" />
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
  .parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
    padding: 10px;
    margin: 10px;
}
    
.div2 {
    grid-row: span 4 / span 4;
    grid-row-start: 2;
}

.div4 {
    grid-row: span 4 / span 4;
    grid-column-start: 5;
    grid-row-start: 2;
}

.div5 {
    grid-column: span 3 / span 3;
    grid-row: span 5 / span 5;
    grid-column-start: 2;
    background-color: #f0f0f0;
}


.post-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px; 
}
.post {
    background-color: #fff; 
    border: 1px solid #ccc;
    border-radius: 8px; 
    padding: 15px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.post img {
    width: 50px;
    height: 50px;
}

.post h2 {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: small;
    font-weight: normal;
}

.like-button {
    width: 24px;
    height: auto;
    cursor: pointer;
    margin-top: 10px;
}

.post p img {
    width: 100%;
    height: 100%;
}

div > p {
    font-style: italic;
}

.post p + p {
    font-weight: bold;
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
  
  </style>
  