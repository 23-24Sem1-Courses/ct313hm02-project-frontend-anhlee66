<script setup>
import {ref} from 'vue'
import store from '@/store/store';
import { Form } from 'vee-validate';
// const props = defineProps({
//     searchText:{type:String,default:''}
// })
const $emit = defineEmits(['update:searchText','logout:user'])
const searchText = ref('')

const avt = ref('./src/assets/avatar/guest.png')
// console.log(avt.value)
// function search(){
//     $emit('search:text',searchText.value)
// }
function onUpdateSearchText(){
    $emit('update:searchText', searchText.value)
    console.log(searchText.value)
}
</script>

<template>
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
        <div  class="ml-auto mr-5 navbar-nav  form-control search-group">
            <Form @submit="onUpdateSearchText">
                <input type="text" class="search" placeholder="Search for courses, books or documents" v-model="searchText"  >
            </Form>
        </div>
        <!-- <div class="navbar ml-auto">
            <i class="fa-solid fa-bell fa-xl"></i>
        </div> -->
        <div class="dropdown ml-auto" v-if="store.state.status.isLoggedIn">
          <button class="btn btn-secondary bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"    >
             <span>
                    <i class="fa-solid fa-bars fa-xl mr-2"></i>
                    <img :src="avt" alt="avatar" class="avatar " >
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/setting">Account Setting</a>
            <a class="dropdown-item" href="/file/upload">File upload</a>
            <a class="dropdown-item" href="#"  @click="$emit('logout:user')">Log out</a>
          </div>
        </div>
        <div v-else class="ml-auto">
            <button class="btn btn-primary">
                <a href="/login" class="text-white">Login</a>
            </button>
        </div>
    </nav>
    
</template>

<style>
.header{
    width: 100%;
    position: fixed;
    top:0;
}
a.router-link-active{
    color: white;
}
    

.search-group{
    max-width: 600px;
    /* border-right:0 ; */
    padding: auto;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}
@media screen and (max-width: 1000px){
.search-group{
    max-width: 200px;
}
.search{
    max-width: 100px;
}
};
.search{
    position: absolute;
    border: 0;
    padding: 0;
    margin: 0;
    left: 5px;
    max-width: 600px;
}
.search:focus{
    border:none;
    outline: none;
}
.search-option{
    position: absolute;
    border: none;
    margin: 0;
    border: 0;
    right:5px; 
    /* background-color: gray; */
}
.search-option:focus{
    outline: none;
}
</style>