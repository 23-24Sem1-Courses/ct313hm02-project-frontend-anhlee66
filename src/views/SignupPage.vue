<script setup>
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import userService from '@/services/user.service'
import UserForm from '@/components/UserForm.vue'

// eslint-disable-next-line no-unused-vars
const $route = useRoute()
// eslint-disable-next-line no-unused-vars
const $router = useRouter()
const user = ref({})

async function signup(user){
    try{
        await userService.signup(user).then((res) =>{
            console.log(res)
            if(res.status == 300){
                alert('Email has been used, change to other')
            }
            else{
                alert(`Create a new user ${user.email}`)
                $router.push({name:'homepage'})
            }
        })
        
        
       
    }
    catch(error){
        console.log(error)
    }
}
</script>
<template>
    <div class="content">
        <h1>SignUp Page</h1>
        <UserForm @signup:user="signup" :user="user" type="signup" />
    </div>
</template>

<style>

</style>