<template>
<body>
  <div id="app" class="container">
    <div><router-view name="leftNavigation" style="margin-left:-180px;position: fixed;margin-top:-20px"></router-view></div>
    <div>
      <router-view name="welcome"></router-view>
    <router-view name="home"></router-view>
    <router-view name="listbody"></router-view>
    <router-view name="info"></router-view>
    </div> 
  </div>
</body>
</template>

<script>
export default {
  name: "app"
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
body {
  background: #ccc;
}
</style>
