<script setup>
// import {ref} from 'vue'
defineProps({
    files:{type:Array, default: () =>[]}
})
// const files = ref(props.files)
// console.log(files.value)
</script>
<template>
    <div class="file-item" v-for="file in files" :key="file.fileID">
        <!-- <img src="/api/thumbnail.png" alt="thumbnail"> -->
        <p class="file-title">{{ file.title }}</p>
        
        <p class="file-course">{{ file.courseName }}</p>
        <!-- <p class="file-author">{{ file.fullName }}</p> -->
    </div>
</template>

<style>
.file-item{
    height: 100px;
    /* width: 250px; */
    border-radius: 10px;
    border: 2px rgb(191, 181, 181) solid;
    display: flex;
    flex-direction: column ;
    align-items: space-between;
    position: relative;
    padding: 10px;
    margin: 10px;
}
.file-item:hover{
    background-color: rgb(236, 223, 206);
}
.file-item:active{
    background-color: rgb(210, 223, 172);
}
.file-author{
    position: absolute;
    bottom: 10px;
}

</style>