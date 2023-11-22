<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';
// import DownloadButton from '@/components/DownloadButton.vue'
import FileItem from '@/components/FileItem.vue'

import fileService from '@/services/file.service';
import store from '@/store/store';
import {ref, onMounted} from 'vue'
function Logout(){
    store.commit('logout')
}
// const searchText = ref('')
const files = ref({})
function search(text){
    console.log(text)
}

async function getFiles(){
    try{
        const data = await fileService.getFiles()
        files.value = data.files
        console.log('file', files.value)
    }
    catch(error){
        console.log(error)
    }

}

onMounted(() => {
    
    getFiles()})
</script>
<template>
    <AppHeader @search:text="search"/>
    <div class="container">
        <button class="btn btn-primary" v-if="store.state.email" @click="Logout">Logout</button>
        <a href="/file/upload" class="btn btn-primary">Upload</a> 
        <!-- <DownloadButton     /> -->
        <!-- <br />   
        <a class="btn btn-secondary" href="/course">Create Course</a>
        <button><a href="/course"></a></button> -->

        <FileItem v-if="files.length>0" :files="files" />
        <p>store:{{ store.state.email }}</p>
        <!-- <p v-if="localStorage.getItem('email')">{{ localStorage.getItem('email') }}</p> -->
    </div>
    
<AppFooter />
</template>