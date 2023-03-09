// Import the createApp function
import { createApp } from 'vue';
// Import the App component
import App from './App.vue';
// Import the createRouter function
import { createRouter, createWebHistory } from 'vue-router';
// Import the RacePage component
import RacePage from './pages/RacePage.vue';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Create routes
const routes = [
  { path: '/race', component: RacePage },
]
// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Create the app
const app = createApp(App)
// Mount the router
app.use(router)
// Mount the app
app.mount('#app')
