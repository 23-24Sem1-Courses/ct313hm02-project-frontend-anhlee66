<!-- <script setup>
import { ref,onMounted, watchEffect } from 'vue'
import store from '@/store/store';
import FileItem from '@/components/FileItem.vue'
import PaginationNav from '@/components/PaginationNav.vue'
import fileService from '@/services/file.service';

const props = defineProps({
    searchText:{type:String,required:true}
})

console.log(files.value)


// const searchText = ref('')

// async function getFiles(page) {
//     try {
//         const data = await fileService.getFiles(page)
//         totalPage.value = data.metadata.lastPage;
//         files.value = data.files.sort((current, next) => current.title.localeCompare(next.title))
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// const searchableFiles = computed(() =>
//     files.value.map((file) => {
//         const { title, courseName, fullName } = file
//         return [title, courseName, fullName].join('').toLowerCase()
//     })
// )

// const filterFiles = computed(() => {
//     if (!searchText.value) return files.value
//     return files.value.filter((file, index) => searchableFiles.value[index].includes(filterText.value.toLowerCase()))
// })
 -->
