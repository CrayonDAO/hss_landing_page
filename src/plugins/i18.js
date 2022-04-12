// i18n.js
import Vue from "vue";
import VueI18n from "vue-i18n";
import locales from "@/locales";

Vue.use(VueI18n);

const locale = navigator.language.split("-")[0];

export default new VueI18n({
  locale,
  fallbackLocale: locale,
  messages: { ...locales },
});
