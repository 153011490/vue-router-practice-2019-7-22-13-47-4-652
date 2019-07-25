<template>
    <div align="center">
        <h1>欢迎使用ToDoList</h1>
        <div><input type="text" placeholder="请输入姓名" ref='input'></div>
        <br>
        <div id="button" @click="toHome">开始使用</div>
    </div>
</template>

<script>
export default {
    name:'WelcomePage',
    methods:{
        toHome(){
            this.$store.commit('setName',this.$refs.input.value)
            this.$router.push('/home')
        }
    }
}
</script>


<style>
#button{
display: inline-block;
background-color:#fc999b;
color:#ffffff;
border-radius: 5px;
text-align:center;
margin-top:2px;
padding: 5px 15px;
}
#button:hover{
cursor: pointer;
opacity: .8;
}
</style>
