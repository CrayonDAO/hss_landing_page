import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/plugins/bootstrap-vue";
import "@/plugins/font-awesome";
import "@/plugins/common";
import i18n from "@/plugins/i18";

import "@/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
