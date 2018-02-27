import Vue from "vue";
import App from "./App.vue"; // component template imported
import VueResource from "vue-resource";

Vue.use(VueResource);

// Custom directives
Vue.directive("multicolor", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

new Vue({
  el: "#app",
  render: h => h(App) // renders the root component to the div id app
});
