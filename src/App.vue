<script setup>
import { ref, onMounted } from 'vue'
// import fileService from '@/services/file.service';
import userService from '@/services/user.service'
import store from '@/store/store';
// import VuePdfEmbed from 'vue-pdf-embed'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';
import { useRouter } from 'vue-router';
// import FileItem from '@/components/FileItem.vue'
// import PaginationNav from '@/components/PaginationNav.vue';
import Sidebar from '@/components/SidebarComponent.vue';
// import MyFile from '@/views/MyFile.vue'
// import {usePDF} from'vuePDF'
const $router = useRouter()

const searchText = ref('')
const selectIndex = ref(-1)
const profilePicture = ref('')
function logout(){
    store.commit('logout')
    $router.go(0)
}
function onUpdateSearchText(text)
{
    searchText.value = text
    // console.log(searchText.value)
    // $router.push({name:'search',query:{q:searchText.value}})
    // onSearch(1)
}
// 
async function getAvatar (){
    const userInfo = await userService.getUserInfo(store.state.user)
    profilePicture.value = userInfo.profilePicture
    // console.log(userInfo)
    // console.log(profilePicture.value,store.state.user)
}
// function updateIndex(index) {
//   selectIndex.value = index
  // console.log(index)
// }
// async function download(id){
//     const res = await fileService.downloadFile(id)
//     console.log(res)
// }
onMounted(() => {
  // onSearch(1)
  getAvatar()
})
// watch(searchText, () => onSearch(1))
// const pdf = "/files/LeTuanAnh_B2005831_FOSS_Development_Lab01_1701181997904.pdf"

// watch(selectIndex, () => console.log(selectIndex.value, searchText.value))
// watchEffect(() => onSearch(currentPage.value))
</script>
<template>
  <AppHeader @update:searchText="onUpdateSearchText" class="header" @logout:user="logout"
    :profilePicture="profilePicture" />
  <div class="main-content">
    <Sidebar class="aside" />
    <section class="section" >
      <!-- <FileItem :files="files" @update:index="updateIndex" :selectIndex="selectIndex" />
      <PaginationNav :totalPage="totalPage" v-model:currentPage="currentPage" /> -->
      <!-- <router-view v-slot="{myfile}">
        <MyFile :is="myfile"/>
      </router-view> -->
     <div> <router-view></router-view></div>
    </section>
  </div>
  <footer class="footer">
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@import './assets/main.css';
@import './assets/sidebar.css'
</style>