<script setup>
import {ref,onMounted, watchEffect, watch} from 'vue'
import fileService from '@/services/file.service';
const props = defineProps({
    text:{type:String}
})
const searchText = ref(props.text)
const files = ref([])
const totalPage = ref(1)
// const currentPage = ref(1)
const selectIndex = ref(-1)

const onSearch = async (page) => {
    try {
        // console.log(props.searchText)
        // const search = ref(props.searchText)
        const data = await fileService.getFiles(page, searchText.value)
        totalPage.value = data.metadata.lastPage ?? 1;
        files.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
        selectIndex.value = -1
        console.log(files.value)
        console.log(searchText.value)
    }
    catch (error) {
        console.log(error)
    }
}

onMounted(() => onSearch(1))
watch(() =>searchText.value, () => onSearch(1))

watchEffect(searchText.value, () => onSearch(1))
</script>
<template>
    
    {{ text }}
</template>