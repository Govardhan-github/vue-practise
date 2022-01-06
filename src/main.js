// import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './route'

import { store } from './Store/index'

const app = createApp(App);

// axios.interceptors.request.use(config =>{
//     console.log(config);
// })
   app.use(store)
    app.use(router)
    app.mount('#app')
