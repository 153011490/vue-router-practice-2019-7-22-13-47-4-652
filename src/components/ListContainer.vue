<template>
    <div>
        <ol>
           <li v-for="(item,index) in filter(this.$store.getters.getFilterType)" :key="item.content">
               <input type="checkbox" @click="itemChecked(index)" :checked="item.status">
               <span @dblclick="modify($event)" @keydown.enter="update($event,item)" :class="item.status?'checked':''">
                   {{item.content}}
                </span>
                </li> 
        </ol>
    </div>
</template>

<script>
export default {
    name:'ListContainer',
    methods:{
        modify(e){
            e.currentTarget.setAttribute('contenteditable',true);
        },
        update(e,item){
            item.content=e.currentTarget.innerText;
            e.currentTarget.setAttribute('contenteditable',false);
        },
        itemChecked(index){
            this.$store.getters.getList[index].status=!this.$store.getters.getList[index].status;
        },
        filter(param){
            if(param==='All')return this.$store.getters.getList;
            else if(param==='Active') return this.$store.getters.getList.filter(item=>!item.status);
            else return this.$store.getters.getList.filter(item=>item.status);
        }
    }
}
</script>

<style>
ol {
    padding-left: 25px;
}

ol li:nth-child(even){
    width:350px;
    background: pink;
}

li:hover{
  cursor: pointer;
 }

 .checked {
    color: #999;
    text-decoration: line-through;
}

</style>
