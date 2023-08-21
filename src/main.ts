import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ScrollBar from '@morioh/v-smooth-scrollbar'
import store from './store';

const app = createApp(App)

app.use(router);
app.use(store);
app.use(ScrollBar); 

store.dispatch('initializeTheme'); // Chama a ação para carregar o tema do LocalStorage

app.mount('#app');

