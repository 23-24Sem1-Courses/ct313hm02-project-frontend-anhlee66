<script setup>
// import store from '@/store/store';
import {ref} from 'vue'
import fileService from '@/services/file.service';
const props = defineProps({
    files:{type:Array, default: () =>[]},
    selectIndex:{type:Number, default:-1},
    isOwner:{type:Boolean,default:false}
})
const files = ref(props.files)
// console.log(files)
const $emit = defineEmits(['update:index'])

function updateIndex(index)
{
    $emit('update:index', index)
    // console.log(index)
}
// function isOwner(email){
//     return email === store.state.user? true:false
// }
async function onDeleteFile(id){
    const confirmation = confirm('Are you sure you want to delete this file.')
    if(confirmation){
        const res = await fileService.deleteFile(id)
        if(res){
        alert(res.message)}
    }
}

function onEditFile(){

}
</script>
<template>
    <!-- <p>{{ files }}</p> -->
    <div class="list-group">
        <li class="list-group-item file-item " v-for="(file, index) in files" :key="file.fileID" @click="updateIndex(index)" :class="{ actived: selectIndex===index}">
            <img class="file-thumbnail" src="/src/assets/thumbnail.png" alt="thumbnail" height="100" width="100">
            <p class="file-title">{{ file.title }}</p>
            <p class="file-course">{{ file.courseName }}</p>
            <p class="file-author">{{ file.fullName }}</p>
            <div class="control pr-lg-4 pl-lg-4" v-if="isOwner">
                <button class="btn btn-primary float-left" @click="onEditFile(file.fileID)">Edit</button>
                <button class="btn btn-danger float-right" @click="onDeleteFile(file.fileID)">Delete</button>
            </div>
        </li>

    </div>
</template>

<style>
.list-group{
    display: flex;
    flex-direction: row;
}
.file-item{
    height: 500px;
    width: 250px;
    border-radius: 10px;
    border: 2px rgb(191, 181, 181) solid;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    position: relative;
    padding: 10px;
    margin: 10px;
}

.file-item:hover{
    border:2px solid rgba(67, 67, 225,0.5);
    color: rgba(46, 46, 229, 0.8);
}
/* .file-item:hover{
    background-color: rgb(236, 223, 206);
} */
.file-item:active{
    background-color: rgb(210, 223, 172);
}
.file-thumbnail{
    height: 250px;
    width: auto;;
}
.actived{
    background-color: rgb(160, 218, 231);
}
.file-title{
    margin-top: 32px;
    height: 80px;
    font-weight: 700;
}
.title-course{
 height: 30px;
}
/* .file-author{
    position: absolute;
    bottom: 10px;
} */

</style>