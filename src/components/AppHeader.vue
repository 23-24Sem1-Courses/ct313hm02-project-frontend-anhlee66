<script setup>
import {ref} from 'vue'
import store from '@/store/store';
const $emit = defineEmits(['search:text'])
const searchText = ref('')

const avt = ref('./src/assets/avatar/guest.png')
console.log(avt.value)
function filterSearch(e){
    searchText.value = e.target.value
    $emit('search:text',searchText.value)
}
</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark" >
        <a href="/" class="navbar-brand h1 ">
            <i class="fa-regular fa-folder-open fa-2xl"></i>
            DocSharing</a>
        
        <div class="ml-5 navbar-nav">
            <li class="nav-item">
                <a class="nav-link">Documents</a>
            </li>
        </div>
        <div class="ml-5 navbar-nav">
            <li class="nav-item">
                <a class="nav-link">About</a>
            </li></div>
        <div class="ml-5 navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
        </div>
        <!-- <div>text:{{ searchText }}</div> -->
        <div  class="ml-auto navbar-nav  form-control search-group">
            <input type="text" class="search" placeholder="Search doc" :value="searchText" @input="filterSearch">
            <!-- <select class="search-option mr-0" :value="">
                <option value="title">Title</option>
                <option value="course">Course</option>
            </select> -->
        </div>
        <div class="navbar ml-auto text-white">
            <i class="fa-solid fa-bell fa-xl"></i>
        </div>
        <div class="navbar mr-5 text-white dropdown" >
           
          
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"    >
             <span>
                    <i class="fa-solid fa-bars fa-xl mr-2"></i>
                    <img :src="avt" alt="avatar" class="avatar " >
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Account Setting</a>
            <a class="dropdown-item" href="#">File upload</a>
            <a class="dropdown-item" href="#">{{ store.state.email==null?'Login':'Logout' }}</a>
          </div>
        </div>
       
        
    </nav>
    
</template>

<style>
.search-group{
    min-width: 300px;
    /* border-right:0 ; */
    padding: auto;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}
.search{
    position: absolute;
    border: 0;
    padding: 0;
    margin: 0;
    left: 5px;
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