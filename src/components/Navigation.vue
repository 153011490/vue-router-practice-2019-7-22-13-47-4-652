<template>
    <div>
      <div id="button" @click="back">＜back</div>
      <div style="float:right;">User: <font color="blue">{{this.$store.getters.getName}}</font></div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            confirm('Are you sure to back to WelcomePage?')? this.$router.push('/'):''
        }
    }
}
</script>


