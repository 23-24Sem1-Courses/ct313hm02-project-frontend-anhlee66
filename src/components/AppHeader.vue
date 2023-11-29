<script setup>
import {ref, } from 'vue'
import { useRouter } from 'vue-router';
import store from '@/store/store';
import { Form } from 'vee-validate';
// import userService from '@/services/user.service';
defineProps({
    profilePicture:{type:String,default:'guest.png'}
})
const $emit = defineEmits(['update:searchText','logout:user'])
const searchText = ref('')
const $router = useRouter()


// async function getAvatar (){
//     const userInfo = await userService.getUserInfo(store.state.email)
//     avt.value = userInfo.profilePicture
//     console.log(avt.value,store.state.email)
// }
// console.log(avt.value)
// function search(){
//     $emit('search:text',searchText.value)
// }

// onMounted(() =>getAvatar())
function onUpdateSearchText(){
    $emit('update:searchText', searchText.value)
    $router.push({ name: 'search', query: { q: searchText.value } })

    // console.log(searchText.value)
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark header" >
            <a href="/" class="navbar-brand h1 ">
                <i class="fa-regular fa-folder-open fa-2xl"></i>
                DocSharing</a>
                
            <div class="ml-3 navbar-nav  ">
           
                    <router-link class="text-white" to="/">Home</router-link>
           
            </div>
            <div class="ml-3 navbar-nav  ">
               <router-link class="text-white" to="/myfile" v-if="store.state.status.isLoggedIn">My&nbsp;File</router-link>
            </div>
            <div class="ml-3 navbar-nav mr-5 ">
                   <router-link class="text-white" to="/file">About</router-link>
            </div>
            
            <Form @submit="onUpdateSearchText" class="ml-auto mr-5 navbar-nav  form-control search-group">
                <input type="text" class="search" placeholder="Search for courses, books or documents" v-model="searchText"  >
                <button type="submit" class="search-icon"><i class="fa-solid fa-magnifying-glass fa-2"></i></button>
            </Form>
        
            <!-- <div class="navbar ml-auto">
            <i class="fa-solid fa-bell fa-xl"></i>
        </div> -->
            <div class="dropdown ml-auto" v-if="store.state.status.isLoggedIn">
              <button class="btn btn-secondary bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"    >
                 <span>
                        <i class="fa-solid fa-bars fa-xl mr-2"></i>
                        <img :src="`image/${profilePicture}`" alt="avatar" class="avatar " >
                </span>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/setting">Account Setting</a>
                <a class="dropdown-item" href="/file/upload">File upload</a>
                <a class="dropdown-item" href="#"  @click="$emit('logout:user')">Log out</a>
              </div>
            </div>
            <div v-else class="ml-auto">
                <a href="/login" class="text-white btn btn-primary login">Login</a>
            </div>
        </nav>
    </header>
    
</template>

<style>

a.router-link-active{
    color: white;
}
    

.search-group{
    max-width: 600px;
    /* border-right:0 ; */
    /* padding: auto; */
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    border-radius: 25px;
}
@media screen and (max-width: 1000px){
.search-group{
    max-width: 100%;
}

};
.search{
    position: absolute;
    border: 0;
    padding: 0;
    margin: 0;
    left: 5px;
    width: 500px;
}
.search:focus{
    border:none;
    outline: none;
}
.search-icon{
    position: absolute;
    right: 10px;
    border: none;
    background-color: inherit;
    border-radius: 50%;
    /* padding: 5px; */
}
.search-icon:hover{
    background-color: inherit;    
}

.login{
    width: 100px;
    border-radius: 25px;
}
</style>