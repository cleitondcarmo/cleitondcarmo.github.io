import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'axios'
import ScrollBar from '@morioh/v-smooth-scrollbar'

const app = createApp(App)

app.use(router);

app.mount('#app');

app.use(ScrollBar);
