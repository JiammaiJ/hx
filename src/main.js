import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Icon,Swipe, SwipeItem,Popup,DropdownMenu, DropdownItem,Grid, GridItem,Image,Overlay,Tab, Tabs,ImagePreview,Lazyload } from 'vant';
import { Menu,MenuItem,Submenu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'

// vant
Vue.use(Icon );
Vue.use(Swipe).use(SwipeItem).use(Submenu);
Vue.use(Popup );
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Grid).use(GridItem);
Vue.use(Image);
Vue.use(Overlay);
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(ImagePreview);
// element
Vue.use(Menu).use(MenuItem);

Vue.config.productionTip = false
Vue.prototype.ImagePreview=ImagePreview
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')