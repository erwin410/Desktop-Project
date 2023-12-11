import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './pages/HomePage.vue';
import ProductPage from './pages/ProductPage.vue';
import StockPage from './pages/StockPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/product', component: ProductPage },
  { path: '/stock', component: StockPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app').$nextTick(() => {

  // Remove Preload scripts loading
  postMessage({ payload: 'removeLoading' }, '*')

  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
