// Import the createApp function
import { createApp } from 'vue'
import App from './App.vue'
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// // Create routes
// const routes = [
//   { path: '/', component: HomePage },
// ]
// // Create the router
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// Create the app
const app = createApp(App)
// Mount the router
// app.use(router)
// Mount the app
app.mount('#app')
