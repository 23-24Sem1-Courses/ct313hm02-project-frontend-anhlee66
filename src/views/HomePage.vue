<script setup>
import {ref,onMounted, watchEffect, watch} from 'vue'
import fileService from '@/services/file.service';
import store from '@/store/store';

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';
import FileItem from '@/components/FileItem.vue'
import PaginationNav from '@/components/PaginationNav.vue';
const files = ref([])
const totalPage = ref(1)
const currentPage = ref(1)
const searchText = ref('')
const selectIndex = ref(-1)
function logout(){
    store.commit('logout')
}
function getText(text)
{
    searchText.value = text
}
async function onSearch(page) {
    try {
        const data = await fileService.getFiles(page,searchText.value)
        totalPage.value = data.metadata.lastPage ?? 1;
        files.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        selectIndex.value = -1
        // console.log(files,totalPage)
    }
    catch (error) {
        console.log(error)
    }
}
// async function fetchImage(){
//     const baseURL = 'api'
//     console.log(await fetch(`${baseURL}/file/49`))
// }
function updateIndex(index){
    selectIndex.value = index
    // console.log(index)
}
onMounted(() => {
    onSearch(1)
})
// watch(searchText,() => onSearch(1))
watch(selectIndex,()=> console.log(selectIndex.value,searchText.value))
watchEffect(() => onSearch(currentPage.value))
</script>
<template>
    <AppHeader @search:text="text =>{searchText=text}" class="" @logout:user="logout"/>
    <p>{{ searchText }}</p>
    <div class="container justify-content-center " v-if="files.length > 0" >
        <FileItem :files="files" @update:index="updateIndex" :selectIndex="selectIndex"/>
        <!-- <p>store:{{ store.state.user }}</p> -->
        <!-- <p v-if="store.state.user">{{ store.state.user }}</p> -->
        <PaginationNav :totalPage="totalPage" v-model:currentPage="currentPage"/>
<p>{{ files }}</p>
    </div>
    <!-- <button @click="fetchImage">Fetch</button> -->

    <AppFooter class="footer"/>
    
</template>

<style>
.body{
    min-width: 900px;
    position: relative;
}
.header{
    position: fixed;
    top:0;
    z-index: 1;
}
.footer{
    position: fixed;
    bottom:0
}
.container{
    padding:100px 0; 
}
.content{
    width: 80%;
}
.sidebar{
    border: 2px black solid;
    height: 600px;
    width:20%;
}
</style>