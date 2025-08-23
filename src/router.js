
import { createRouter, createWebHistory } from 'vue-router';
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Login from "./views/Login.vue"
import Sigup from "./views/Sigup.vue"
import Suport from "./views/Suport.vue"
import Termos from "./views/Termos.vue"
import ProductsClientes from './views/ProductsClientes.vue';
// import DashboardClient from "./views/dashboardclient.vue"
import Teste from "./views/Teste.vue"
import Dash from "./views/Client/DashClient.vue"
import License from './views/Client/License.vue';
import Supports from './views/Client/Supports.vue';
import DatasUser from './views/Client/DatasUser.vue';
import settingsuser from './views/Client/settingsuser.vue';

const routes = [
  { path: '/', component: ProductsClientes },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/sigup', component: Sigup },
  { path: '/suport', component: Suport },
  { path: '/termos', component: Termos },
  { path: '/items', component: ProductsClientes },
  // { path: '/dclient', component: DashboardClient},
  { path: "/teste", component: Teste},
  { path: "/dash", component: Dash},
  { path: "/licenses", component: License},
  { path: "/supports", component: Supports},
  { path: "/datauser", component: DatasUser},
  { path: "/settingsuser", component: settingsuser}
];
// /public/clients/logo-colorido.png

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
