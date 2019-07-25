<template>
  <div>
    <Navigation></Navigation>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Header from "./Header.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer,
    Navigation
  }
};
</script>

<style>
.container {
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  background: white;
}
</style>
