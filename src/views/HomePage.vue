<script setup>
import {ref,onMounted, watchEffect, watch} from 'vue'
import fileService from '@/services/file.service';
// import userService from '@/services/user.service'
// import store from '@/store/store';
// import VuePdfEmbed from 'vue-pdf-embed'

// import AppHeader from '@/components/AppHeader.vue'
// import AppFooter from '@/components/AppFooter.vue';
import FileItem from '@/components/FileItem.vue'
import PaginationNav from '@/components/PaginationNav.vue';
// import FileView from '@/views/FileView.vue'
// import Sidebar from '@/components/SidebarComponent.vue';
// import {usePDF} from'vuePDF'
const files = ref([])
const totalPage = ref(1)
const currentPage = ref(1)
const searchText = ref('')
const selectIndex = ref(-1)
// const profilePicture = ref('')
// function logout(){
//     store.commit('logout')
// }
// function onUpdateSearchText(text)
// {
//     searchText.value = text
//     console.log(searchText.value)
//     // onSearch(1)
// }
async function getFileNew(page) {
    try {
        const data = await fileService.getFiles(page,searchText.value)
        totalPage.value = data.metadata.lastPage ?? 1;
        files.value = data.files.sort((current, next) => current.uploadDate.localeCompare(next.title))
        selectIndex.value = -1
        // console.log(files.value[0])
        // const date = new Date(files.value[0].uploadDate)
        // console.log(date)
    }
    catch (error) {
        console.log(error)
    }
}
// async function getAvatar (){
//     const userInfo = await userService.getUserInfo(store.state.user)
//     profilePicture.value = userInfo.profilePicture
//     // console.log(userInfo)
//     console.log(profilePicture.value,store.state.user)
// }
function updateIndex(index){
    selectIndex.value = index
    // console.log(index)
}
// async function download(id){
//     const res = await fileService.downloadFile(id)
//     console.log(res)
// }
onMounted(() => {
    getFileNew(1)
    // getAvatar()
})
watch(searchText,() => getFileNew(1))
// const pdf = "/files/LeTuanAnh_B2005831_FOSS_Development_Lab01_1701181997904.pdf"

watch(selectIndex,()=> console.log(selectIndex.value,searchText.value))
watchEffect(() => getFileNew(currentPage.value))
</script>
<template>
    <!-- <AppHeader  @update:searchText="onUpdateSearchText" class="header" 
        @logout:user="logout" :profilePicture="profilePicture" />
    <div class="main-content">
        <Sidebar class="aside"/> -->
        <section class="section" v-if="files.length > 0" >
            <div class="new-file">
                <p>New files upload</p>
                <FileItem :files="files" @update:index="updateIndex" :selectIndex="selectIndex"/>
                <PaginationNav :totalPage="totalPage" v-model:currentPage="currentPage"/>
            </div>
            <div class="new-file">
                    <p>Most like</p>
                    <FileItem :files="files" @update:index="updateIndex" :selectIndex="selectIndex"/>
                    <PaginationNav :totalPage="totalPage" v-model:currentPage="currentPage"/>
            </div>
        </section>
<!--         
    </div>
    
    <footer class="footer">    
        <AppFooter />
    </footer> -->
    
    
</template>

<style lang="scss">
@import '../assets/main.css';
@import '../assets/home.css'
</style>