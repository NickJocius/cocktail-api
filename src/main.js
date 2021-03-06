import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from 'axios'
import VueAxios from 'vue-axios'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';    //theme
import 'primevue/resources/primevue.min.css';              //core css
import 'primeicons/primeicons.css';                       //icons
import 'primeflex/primeflex.css';


const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');
