import "./index.css";
import "flowbite";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import library from "@/assets/Icons/icons.js";
import Vue3Toasity, { toast } from "vue3-toastify";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(Vue3Toasity, {
  autoClose: 3000,
  multiple: true,
  transition: toast.TRANSITIONS.Bounce,
  theme: "colored",
  pauseOnFocusLoss: false,
});

app.mount("#app");
