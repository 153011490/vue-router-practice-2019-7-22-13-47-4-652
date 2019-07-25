<template>
  <div class="card-holder">
    <div class="card-wrapper" @click="showList">
      <a href="#">
        <div class="card bg-01">
          <span class="card-content" >列表</span>
        </div>
      </a>
    </div>
    <div class="card-wrapper" @click="myinfo">
      <a href="#">
        <div class="card bg-02">
          <span class="card-content" >我的</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        showList(){
            this.$router.push('/home');
        },
        myinfo(){
            this.$router.push('/my-info');
        }
    }
}
</script>


<style>
a:link,
a:hover,
a:visited,
a:active {
  color: #fff;
  text-decoration: none;
}
.card-holder {
  position: fixed;
  width: 0px;
  overflow: visible;
}

.card-wrapper {
  display: inline-block;
  clear: both;
}

.card {
  padding: 32px 64px 32px 64px;
  background: #fff;
}

.card-content {
  display: inline-block;
  color: #fff;
  font-family: "Droid Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
}

.bg-01 {
  background:#00aeff;
}
.bg-02 {
  background:#00e1ff
}
</style>
