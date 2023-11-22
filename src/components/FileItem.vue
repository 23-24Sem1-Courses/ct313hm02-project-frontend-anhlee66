<script setup>
import {ref} from 'vue'
const props = defineProps({
    files:{type:Object, required:true}
})
const files = ref({...props.files})
console.log(files.value)
</script>
<template>
    <div class="file-group" v-for="(file) in files" :key="file.fileID">
        <p class="file-title">{{ file.title }}</p>
        
        <p class="file-course">{{ file.courseName }}</p>
        <p class="file-author">{{ file.fullName }}</p>
    </div>
</template>

<style>
.file-group{
    height: 200px;
    width: 250px;
    border-radius: 10px;
    border: 2px rgb(123, 118, 118) solid;
    display: flex;
    flex-direction: column ;
    align-items: space-between;
    position: relative;
    padding: 10px;
}
.file-author{
    position: absolute;
    bottom: 10px;
}
</style>