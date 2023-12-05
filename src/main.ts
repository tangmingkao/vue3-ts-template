import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index";
import { piniaStore } from "@/stores/index";

// 引入样式
import "@/assets/scss/main.scss";
import "@/assets/css/front.css";
import "@/assets/css/tailwind.css";
// 引入iconfont
import "@/assets/iconfont/iconfont.css";

// element-plus
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/src/index.scss";

// plugin
import i18nPlugin from "@/plugins/i18n-plugin";



const app = createApp(App);

app.use(ElementPlus, { size: "default", zIndex: 3000 });
app.use(piniaStore);
app.use(router);
const i18n = i18nPlugin();
app.use(i18n);


app.mount('#app');


