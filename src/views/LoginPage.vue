<script setup>
import UserForm from '@/components/UserForm.vue'
import  userService from '@/services/user.service'
import { useRoute,useRouter } from 'vue-router';
import store from '@/store/store';
import { ref } from 'vue';

// eslint-disable-next-line no-unused-vars
const $route = useRoute()
// eslint-disable-next-line no-unused-vars
const $router = useRouter()

const user = ref({})
async function login(user){
    try{
        // console.log(JSON.stringify(user))
        const res = await userService.login(user)
        if(res.status == 301) console.log('Cannot Log in');
        else{
            store.commit('login', user.email)
            console.log(localStorage.getItem('email'))

        }
        $router.push({name:'homepage'})
    }
    catch(error)
    {
        console.log(error)
    }
}

</script>

<template>
    <div class="content">
        <h1>Login Form</h1>
        <UserForm @login:user="login" :user="user" type="login" />
        <p>
            <a href="/signup">Or Sign Up</a>
        </p>
    </div>
</template>

<style>

</style>