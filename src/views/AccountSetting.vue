
<script setup>
import { ref ,onMounted} from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import userService from '@/services/user.service'
import store from '@/store/store';
import * as yup from 'yup'



const FormSchema = yup.object().shape({
    email: yup
        .string()
        // .required("Email cannot empty")
        .email('Email invalid')
        .max(50, 'Less than 50 characters'),
    name: yup   
        .string()
        .required()
})

const user = ref(store.state.user)
const userInfo = ref({})
async function getUserInfo(){
    const data = await userService.getUserInfo(user.value)
    userInfo.value = data
}
async function updateUser(){
    console.log(userInfo.value)
    await userService.updateUser(userInfo.value).then(res => alert(res.message))
    // if(res){
    //     alert(res.message)
        
    // }
    // console.log(res)
}
onMounted(()=> getUserInfo(user.value))
console.log(userInfo.value)
</script>


<template>

<div class="contain">
    <!-- <p>{{ userInfo.yearOfBirth }}</p> -->
    <h2 class="text-center setting-title">Account&nbsp;Setting</h2>
    <Form  class="content" enctype="multipart/form-data"  @submit="updateUser" :validation-schema="FormSchema">
        <div class="form-group">
            <label for="name">Full Name</label>
            <Field name="name" type="text" class="form-control" v-model="userInfo.fullName" />
            <ErrorMessage name="name" class="error-feedback text-danger" />
        </div>
        <div class="form-group">
            <label for="birth">Your Birthday</label>
            <input name="birth" type="date" class="form-control" v-model="userInfo.birthday" min="1997-01-01"  />
            <ErrorMessage name="birth" class="error-feedback text-danger" />
        </div>
        <div class="form-group">
                <label for="avt">Avatar</label>
            
                <input class="form-control" type="file" accept="image/png, image/gif, image/jpeg"
                     @change="(e) => userInfo.profilePicture = e.target.files[0]"  />
                <ErrorMessage name="avt" class="error-feedback text-danger" />
            </div>
        <div class="form-group" >
            <label for="organization">Organization</label>
            <Field name="organization" type="text" class="form-control"  v-model="userInfo.organization"/>
            <ErrorMessage name="organization" class="error-feedback text-danger" />
        </div>
        <!-- <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control"  />
            <ErrorMessage name="password" class="error-feedback text-danger" />
        </div> -->

        <div class="form-group ml-lg-5 mr-lg-5 ">
            <span class="btn btn-secondary float-left" ><router-link class="text-white" to="/">Go back</router-link></span>
            <button type="submit" class="btn btn-primary float-right justify-content-center" >Update</button>
        </div>
    </Form>
</div>
</template>
<style>

.setting-title{
    margin-top: 10px;
}
.contain{
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
