import Vue from "vue";
import App from "./App.vue"; // component template imported

export const bus = new Vue()

new Vue({
  el: "#app",
  render: h => h(App) // renders the root component to the div id app
});
