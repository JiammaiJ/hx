import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Icon,Swipe, SwipeItem,Popup,DropdownMenu, DropdownItem   } from 'vant';
import { Menu,MenuItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// vant
Vue.use(Icon );
Vue.use(Swipe).use(SwipeItem);
Vue.use(Popup );
Vue.use(DropdownMenu).use(DropdownItem);

// element
Vue.use(Menu).use(MenuItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
