<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate'
import courserService from '@/services/course.service'
import {ref} from 'vue'
const course = ref({})
async function submit(){
    console.log('submit')
    const res  = await courserService.createCourse(course.value)   
    if(res){
        alert(`Create a new course ${course.value.name}`)
    }
}
</script>

<template>
    <div>
        <h2>Create Course</h2>
        <Form @submit="submit">
            <div class="form-group">
                <label for="name">Type Course Name</label>
                <Field name="name" class="form-control" type="text" v-model="course.name"/>
                <ErrorMessage class="error-feedback text-danger"/>
            </div>
            <div class="form-group">
                <label for="description">Type Description</label>
                <Field name="description" class="form-control" type="text" v-model="course.description"/>
                <ErrorMessage class="error-feedback text-danger"/>
            </div>
            <div>
                <input type="submit" class="btn btn-primary" value="Submit">
            </div>
        </Form>
    </div>
</template>