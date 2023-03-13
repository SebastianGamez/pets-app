// Import the createApp function
import { createApp } from 'vue';
// Import the App component
import App from './App.vue';
// Import the createRouter function
import { createRouter, createWebHistory } from 'vue-router';
// Import the LandingPage component
import HomePage from './pages/HomePage.vue';
// Import the RacePage component
import RacePage from './pages/RacePage.vue';
// Import UserPage component
import UserPage from './pages/UserPage.vue';
// Import GiveUpAdoptionPage component
import GiveUpAdoptionPage from './pages/GiveUpAdoptionPage.vue';
// Import AdoptionPage component
import AdoptionPage from './pages/AdoptionPage.vue';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Create routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/race', component: RacePage },
  { path: '/user', component: UserPage },
  { path: '/giveUpAdoption', component: GiveUpAdoptionPage },
  { path: '/adoption', component: AdoptionPage }
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
