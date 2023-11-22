<script setup>
import {ref} from 'vue'
const props = defineProps({
    name:{type:String,required:true},
    state:{type:String, required:true}
})
const name = ref(props.name)
const state = ref(props.state)
console.log(name.value)
</script>

<template>
    <div class=container>
        <p class=" state-name" :class="{'text-active' : state == name,'text-inactive':state != name}" >{{ name }}</p>
        <div class="state-under" :class="{'bg-active':state == name,  'bg-inactive':state != name}"></div>
    </div>

</template>

<style lang="scss">
.container{
    height: 40px;
    width: 200px;


}
.state-name{
    text-align: center;
    margin: 0;
}
.state-under{
    width: 200px ;
    height: 8px;
    border-radius: 15px;
    color: gray;
    justify-self: auto;
}
.text-active{
    color:rgb(25, 25, 224);
    width: 200px;
}
.text-inactive{
    color:grey;
    width: 200px;
}
.bg-active{
    background-color: rgb(25, 25, 240);
}
.bg-inactive{
    background-color: grey;
}
</style>