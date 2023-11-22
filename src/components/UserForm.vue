<script setup>
import {ref} from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps({
    user: { type: Object, required: true },
    type: { type:String, required: true}
})
const $emit = defineEmits(['login:user', 'signup:user'])

const user = ref({...props.user})
const type = ref(props.type)
const FormSchema = yup.object().shape({
    email: yup
        .string()
        // .required("Email cannot empty")
        .email('Email invalid')
        .max(50, 'Less than 50 characters'),
    password: yup.string().required('Password cannot empty').min(8, 'Password require more than 8 characters '),
})

function submitUser(){
    if(!user.value.name){
        $emit('login:user', user.value)
    }
    else{
        $emit('signup:user',user.value)
    }
}
</script>

<template>
    <div class="content">
        <Form @submit="submitUser" :validation-schema="FormSchema" class="content" >
            <div class="form-group">
                <label for="email">Email address</label>
                <Field name="email" type="email" class="form-control" v-model="user.email" />
                <ErrorMessage name="email" class="error-feedback text-danger" />
            </div>
            <div class="form-group" v-if="type === 'signup'">
                <label for="name">Full name</label>
                <Field name="name" type="text" class="form-control"  v-model="user.name" />
                <ErrorMessage name="name" class="error-feedback text-danger" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <Field name="password" type="password" class="form-control"  v-model="user.password"/>
                <ErrorMessage name="password" class="error-feedback text-danger" />
            </div>
            <div class="form-group ">
                <button class="btn btn-primary justify-content-center"  v-if="type === 'signup'">Sign Up</button>
                <button class="btn btn-primary  justify-content-center"  v-else >Login</button>
            </div>
        </Form>
    </div>
    <!-- <p>{{ JSON.stringify(user) }}</p>  -->
</template>

<style>
.content{
    margin: auto;
    max-width: 500px;
    max-height: 500px;
}
</style>