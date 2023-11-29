<script setup>
import userService from '@/services/user.service';
import { ref, onMounted ,watchEffect} from 'vue'
import store from '@/store/store';
// const email = ref(store.state.user)
const user = ref({})
const email = store.state.user

async function getUserInfo(){
    if(!email){
        user.value = {
            fullName:'Guest User',
            organization:'None'
        }
    }
    user.value = await userService.getUserInfo(email)
// console.log(email)

}
// console.log(localStorage.getItem('user'))
onMounted(() => getUserInfo())
// watch((store.state.user,()=> getUserInfo()))
watchEffect((store.state.user, () => getUserInfo()))

</script>

<template>
   <aside>
     <div class="profile-card">
        <div class="profile-header">
            <img src="/image/images.jpg " alt="Profile Image" class="profile-image">
            <h1>{{ user.fullName }}</h1>
            <p>{{ user.organization }}</p>
        </div>
        <div class="profile-stats">
            <div class="stat">
                <span class="stat-number">0</span>
                <span class="stat-description">Impact</span>
            </div>
            <div class="stat">
                <span class="stat-number">0</span>
                <span class="stat-description">Uploads</span>
            </div>
            <div class="stat">
                <span class="stat-number">0</span>
                <span class="stat-description">Upvotes</span>
            </div>
        </div>
        <router-link class="text-white" to="/file/upload"><button class="upload-button">Upload</button></router-link>
        <div class="navigation">
            
            <div class="nav-item">
               <router-link to="/">
                    <span><i class="fa-solid fa-house">&nbsp;&nbsp;</i></span>
                    <span>Home</span>
               </router-link>
            </div>
            <div class="nav-item">
                <router-link to="/myfile">
                    <span>&nbsp;<i class="fa-solid fa-bookmark">&nbsp;</i></span>
                    <span>  My Library</span>
                </router-link>
            </div>
            <!-- {{ user }} -->
        </div>
    </div>
    
   </aside>

</template>
<style lang="scss">
@import '../assets/sidebar.css'
</style>