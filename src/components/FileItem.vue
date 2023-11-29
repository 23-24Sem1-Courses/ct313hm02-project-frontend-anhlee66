<script setup>
// import store from '@/store/store';
// import {ref} from 'vue'
// import router from '@/router';
import fileService from '@/services/file.service';
import VuePdfEmbed from 'vue-pdf-embed'
import { useRouter } from 'vue-router';
defineProps({
    files:{type:Array, default: () =>[]},
    selectIndex:{type:Number, default:-1},
    isOwner:{type:Boolean,default:false}
})
// const files = ref(props.files)
// console.log(files)
const $emit = defineEmits(['update:index'])
const $router = useRouter()
function updateIndex(index)
{
    $emit('update:index', index)
    // console.log(index)
    // $router.push({name:'fileview'})
}
// function isOwner(email){
//     return email === store.state.user? true:false
// }
async function onDeleteFile(id){
    const confirmation = confirm('Are you sure you want to delete this file.')
    if(confirmation){
        const res = await fileService.deleteFile(id)
        if(res){
        alert(res.message)
        $router.go(0)
    }
    }
}


</script>
<template>
    <!-- <p>{{ files }}</p> -->
    <div class="list-group" >
        <router-link :to="`/fileview/${file.fileID}`" class="list-group-item file-item " v-for="(file, index) in files" :key="file.fileID" @click="updateIndex(index)" :class="{ actived: selectIndex===index}">
            <!-- <img class="file-thumbnail" src="/src/assets/thumbnail.png" alt="thumbnail" height="100" width="100"> -->
            <vue-pdf-embed class="file-thumbnail" :source="`/files/${file.path}`" :page="1"    width="170"/>
            <!-- <p>{{ file.path }}</p> -->
            <p class="file-title">{{ file.title }}</p>
            <p class="file-course">{{ file.courseName }}</p>
            <!-- <p class="file-author">{{ file.fullName }}</p> -->
            <div class="control pr-lg-3 pl-lg-3" v-if="isOwner">
                <button class="btn btn-primary float-left" >Edit</button>
                <!-- <button class="btn btn-primary float-left" ><a :href="`/file/${file.fileID}`">Edit</a></button> -->
                <button class="btn btn-danger float-right" @click="onDeleteFile(file.fileID)">Delete</button>

            </div>
            <!-- <div v-else class="float-right" @click="onDownload(file.fileID)"><i class="fa-solid fa-floppy-disk fa-xl"></i></div> -->
            <!-- {{ file.path }} -->
        </router-link>
    </div>
</template>

<style>
.list-group{
    display: flex;
    flex-direction: row;
}
.file-item{
    height: 300px;
    width: 200px;
    border-radius: 10px;
    /* border: 2px rgb(191, 181, 181) solid; */
    display: flex;
    flex-direction: column;
    align-items: space-between;
    position: relative;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        justify-content: center;
    color: rgb(83, 76, 76);
    cursor: pointer;
}
.file-item img{
    justify-content: center;
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
    height: 120px;
    overflow: hidden;
    /* width: auto;; */
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