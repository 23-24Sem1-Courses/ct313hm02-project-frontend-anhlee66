<script setup>
// import store from '@/store/store';
// import {ref} from 'vue'
// import router from '@/router';
// import fileService from '@/services/file.service';
import VuePdfEmbed from 'vue-pdf-embed'
// import { useRouter } from 'vue-router';
defineProps({
    files: { type: Array, default: () => [] },
    selectIndex: { type: Number, default: -1 },
    isOwner: { type: Boolean, default: false }
})
// const files = ref(props.files)
// console.log(files)
const $emit = defineEmits(['update:index'])
// const $router = useRouter()
function updateIndex(index) {
    $emit('update:index', index)
    // console.log(index)
    // $router.push({name:'fileview'})
}

</script>
<template>
    <!-- <p>{{ files }}</p> -->
    <div class="list-group-search">
        <router-link :to="`/fileview/${file.fileID}`" class="list-group-item-search file-item-search " v-for="(file, index) in files"
            :key="file.fileID" @click="updateIndex(index)" :class="{ actived: selectIndex === index }">
            <!-- <img class="file-thumbnail" src="/src/assets/thumbnail.png" alt="thumbnail" height="100" width="100"> -->
            <vue-pdf-embed class="file-thumbnail-search" :source="`/files/${file.path}`" :page="1" width="170" />
            <!-- <p>{{ file.path }}</p> -->
           <div class="file-search-content">
                <p class="file-title-search">{{ file.title }}</p>
                <p class="file-course-search">{{ file.courseName }}</p>
                <!-- <p class="file-author-search">{{ file.fullName }}</p> -->
           </div>
           

        </router-link>
    </div>
</template>

<style>
.list-group-search {
    display: flex;
    flex-direction: column;
}

.file-item-search {
    height: 90px;
    /* width: 200px; */
    border-radius: 10px;
    /* border: 2px rgb(191, 181, 181) solid; */
    display: flex;
    flex-direction: row;
    align-items: space-between;
    position: relative;
    padding: 5px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    justify-content: space-around;
    color: rgb(83, 76, 76);
    cursor: pointer;
}


.file-item-search:hover {
    border: 2px solid	#00b8ff;
    color: 	#00b8ff;
}
/* .file-item:hover{
    background-color: rgb(236, 223, 206);
} */
.file-item-search:active {
    background-color: rgb(210, 223, 172);
}

.file-search-content{
    width: 80%;
    background-color: rgb(255, 255, 255);
    /* position: absolute; */
    
}
.file-thumbnail-search {
    height: 80px;
    overflow: hidden;
    /* position: absolute; */
    /* left:5px; */
    margin:0;
    border-radius: 10px;
    border: 4px solid #dcdbdb;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */

}

.actived {
    background-color: rgb(160, 218, 231);
}

.file-title-search {
    /* margin-top: 32px; */
    /* height: 80px; */
    font-weight: 700;
}

.title-course-search {
    height: 30px;
}

/* .file-author{
    position: absolute;
    bottom: 10px;
} */</style>