<script setup>
import {ref, onMounted,watchEffect,watch} from 'vue'
import fileService from '@/services/file.service';
// import store from '@/store/store';

// import TestCom from '@/components/TestCom.vue';
import FileSearchItem from '@/components/FileSearchItem.vue'
import PaginationNav from '@/components/PaginationNav.vue';
const props = defineProps({
    searchText:{type:String, default:''}
})
const searchText = ref(props.searchText)
const files = ref([])
const totalPage = ref(1)
// const currentPage = ref(1)
const selectIndex = ref(-1)

const  onSearch = async (page) => {
    try {
        // console.log(props.searchText)
        // const search = ref(props.searchText)
        const data = await fileService.getFiles(page,searchText.value)
        totalPage.value = data.metadata.lastPage ?? 1;
        files.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        selectIndex.value = -1
        console.log(files.value)
        // console.log('hello')
    }
    catch (error) {
        console.log(error)
    }
}

onMounted(() =>onSearch(1))
watch(() =>searchText.value, () => onSearch(1))

watchEffect(searchText.value, () => onSearch(1))
</script>
<template>
    <div class="file-search">
        <div class="key"></div>
        <div class="list-file">
            <FileSearchItem :files="files" @update:index="updateIndex" :selectIndex="selectIndex"/>
        </div>
        <div class="pagination">
            <PaginationNav />
        </div>
    </div>
    
</template>
<style>
.file-search{
    /* display: ; */
}
.key{

}
.list-file{

}
.pagination{
    /* position: fixed;
    bottom: 10px;
    right: 600px; */
}
</style>