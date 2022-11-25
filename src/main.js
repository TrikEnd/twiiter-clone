import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/styles/index.css';
import Home from "./components/Home.vue"; 
import Profile from "./components/Profile.vue";
import Profileelon from "./components/Profileelon.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
     {
      path: '/profileelon',
      component: Profileelon,
    },
  ]
});


Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App),
  router
}).$mount('#app');
