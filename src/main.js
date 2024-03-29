import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("VCalendar", Calendar);
app.component("VDatePicker", DatePicker);

app.mount("#app");
