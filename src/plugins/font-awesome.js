import Vue from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faTwitter, faDiscord, faInstagram, faAngleDown);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
