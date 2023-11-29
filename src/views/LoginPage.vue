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
        if(res.status == 301) {
            console.log('Cannot Log in');
            store.commit('loginFailure')
        }
        else{
            store.commit('loginSuccess', user.email)
            console.log(localStorage.getItem('user'))
            // $router.go(0)
            $router.push({ name: 'homepage' })

        }
    }  
    catch(error)
    {
        console.log(error)
    }
}

</script>

<template>
    <div class="content">
        <h2 class="text-center">Welcome to Doc Sharing</h2>
        <UserForm @login:user="login" :user="user" type="login" />
        <p class="text-center ">
                <a href="/signup">Sign up if you don't have Account</a>
        </p>
    </div>
</template>

<style>
.content{
    margin-top: 50px;
}
</style>