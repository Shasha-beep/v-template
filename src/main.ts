import { createApp } from "vue";

import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// vue i18n
import I18n from "@/language/index";
// pinia store
import pinia from "@/store/index";
// svg icons
import "virtual:svg-icons-register";
// vue Router
import router from "@/routers/index";

const app = createApp(App);

app.use(I18n).use(pinia).use(router).mount("#app");
