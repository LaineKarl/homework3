<template>
  <body>
    <section>
        <AppHeader/>
        <AppFooter/>
    </section>
  </body>
</template>

<script>
// @ is an alias to /src
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>

#login {
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 350px;        
    margin: 70px auto;
    padding-top: 20px;      
    background-color: orange;
    text-align: center;
    border-radius: 10px;
    line-height: 1.5;
}

input[type="email"],
input[type="password"] {
    padding: 10px; 
    margin: 10px 0; 
}


.loginbutton {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 50%;
    margin-top: 1rem;
}

.loginbutton:hover {
    background-color: #0056b3;
}

#login a ~ a {
    color: #007bff
}


</style>