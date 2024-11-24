import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HomeView from './views/HomeView.vue'
import SignUp from './views/SignUp.vue'

createApp(SignUp).use(store).use(router).mount('#app')
