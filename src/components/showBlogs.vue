<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search posts">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link :to="'/blog/' + blog.id"><h2 v-multicolor>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  computed: {},
  created() {
    this.$http
      .get("https://vue-js-blog-6bc85.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json(); // returns a promise object, not the data... yet!
      })
      .then(function(data) {
        // now returns the data
        var blogsArray = [];
        for (let keyCode in data) {
          data[keyCode].id = keyCode;
          blogsArray.push(data[keyCode]);
        }
        console.log(blogsArray);
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    multicolor: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
