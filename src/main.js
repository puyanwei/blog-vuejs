import Vue from "vue";
import App from "./App.vue"; // component template imported
import VueResource from "vue-resource";

Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App) // renders the root component to the div id app
});
