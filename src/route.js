const { createRouter, createWebHistory } = require("vue-router");

import Login from './components/UserApp/Login.vue';
import signup  from './components/UserApp/signup.vue';
import Home  from './components/UserApp/Home.vue';
import cAPI from './components/compositionAPI/cAPI.vue'
import props from './components/compositionAPI/props.vue'
import Counter  from './components/CounterApp/Counter.vue';
import Post from './components/Post Component/post.vue'

//  import store from './Store/index'
// import { IS_USER_AUTHENTICATED_GETTER } from './Store/storeConstants';

const routes = [

    {path:'/',component : Home },
    {path:'/capi',component :  cAPI,
    children:[
        {path : '/props',component : props},
    ]
   
},

    {path : '/props',component : props},
    {path:'/posts',component : Post , meta:{auth : false}},
    {path:'/counter',component : Counter , meta:{auth : false}},
    {path:'/login',component : Login,meta:{auth : true}},
    {path:'/signup',component : signup},
]
const router = createRouter({
    history : createWebHistory(),
    routes,
})

// router.beforeEach((to,from,next)=>{
//     if(to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`])
//     {
//         console.log(to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]);
//         next('/login')
//     }else if(!to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]){
//         next('/posts')
//     }else{
//         next();
//     }
//    console.log(store);
// })
export default router;