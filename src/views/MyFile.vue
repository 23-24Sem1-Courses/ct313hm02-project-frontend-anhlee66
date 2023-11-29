<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import fileService from '@/services/file.service';
import store from '@/store/store';

import FileItem from '@/components/FileItem.vue'
import PaginationNav from '@/components/PaginationNav.vue';
import FileItemFavourite from '@/components/FileItemFavourite.vue';
const filesUpload = ref([])
const fileFavourite = ref([])
const totalPageUpload = ref(1)
const currentPageUpload = ref(1)
const totalPageFavourite = ref(1)
const currentPageFavourite = ref(1)
// const searchText = ref('')
const email = ref(store.state.user)

async function myUploadFile(page) {
    try {
        const data = await fileService.getFilesByEmail(page, email.value)
        totalPageUpload.value = data.metadata.lastPage ?? 1;
        filesUpload.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        // console.log(files,totalPage)
    }
    catch (error) {
        console.log(error)
    }
    // console.log(searchText.value)
}
async function favourite(page) {
    try {
        const data = await fileService.getFilesByEmail(page, email.value)
        totalPageFavourite.value = data.metadata.lastPage ?? 1;
        fileFavourite.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        // console.log(files,totalPage)
    }
    catch (error) {
        console.log(error)
    }
    // console.log(searchText.value)
}
onMounted(() => {
    myUploadFile(1)
    favourite(1)
})
watchEffect(() => {
    myUploadFile(currentPageUpload.value)
    favourite(currentPageFavourite.value)
})
</script>
<template>
    <div class="" v-if="filesUpload.length > 0">
        <p class="my-file-title mt-lg-13">My upload file</p>
        <FileItem v-model:files="filesUpload" :isOwner="true" />
        <PaginationNav :totalPage="totalPageUpload" v-model:currentPage="currentPageUpload" />
    </div>
    <div>
        <p class="favourite-title mt-lg-13">Favourite</p>
        <FileItemFavourite v-model:files="fileFavourite" :isOwner="true" />
        <PaginationNav :totalPage="totalPageFavourite" v-model:currentPage="currentPageFavourite" />
    </div>
</template>

<style>
.body {
    min-width: 900px;
    position: relative;
}

.header {
    position: fixed;
    top: 0;
    z-index: 1;
}

.footer {
    position: fixed;
    bottom: 0
}

.container {
    padding: 100px 0;
}

.content {
    width: 80%;
}
.my-file-title{
    font-size: large;
    font-weight: 600;
}
.favourite-title{
    font-size: large;
    font-weight: 600;
}

</style>