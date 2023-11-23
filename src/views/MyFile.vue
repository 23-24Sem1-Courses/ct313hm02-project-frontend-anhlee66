<script setup>
import { ref, onMounted, watchEffect } from 'vue'
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
const email = ref(store.state.user)
function logout() {
    store.commit('logout')
}
function getText(text) {
    searchText.value = text
}
async function onSearch(page) {
    try {
        const data = await fileService.getFilesByEmail(page, email.value)
        totalPage.value = data.metadata.lastPage ?? 1;
        files.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        // console.log(files,totalPage)
    }
    catch (error) {
        console.log(error)
    }
    console.log(searchText.value)
}
onMounted(() => {
    onSearch(1)
})
watchEffect(() => onSearch(currentPage.value))
</script>
<template>
    <AppHeader @search:text="getText" class="" @logout:user="logout" />
    <div class="container" v-if="files.length > 0">
        <h2 class="text-center mt-lg-13">My upload file</h2>
        <FileItem v-model:files="files" :isOwner="true" />
        <!-- <p>store:{{ store.state.user }}</p> -->
        <!-- <p v-if="store.state.user">{{ store.state.user }}</p> -->
        <PaginationNav :totalPage="totalPage" v-model:currentPage="currentPage" />
    </div>
    <AppFooter class="footer" />
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

.sidebar {
    border: 2px black solid;
    height: 600px;
    width: 20%;
}</style>