<template>
    <div>
        <InputBar></InputBar>
        <ListContainer></ListContainer>
    </div>
</template>

<script>
import InputBar from './InputBar.vue';
import ListContainer from './ListContainer.vue';
export default {
    name:'Body',
    components:{
        InputBar,
        ListContainer
    }
}
</script>


