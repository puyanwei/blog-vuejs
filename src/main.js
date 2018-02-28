import Vue from "vue";
import App from "./App.vue"; // component template imported
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// Custom filters

Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + "...";
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App), // renders the root component to the div id app
  router: router
});
