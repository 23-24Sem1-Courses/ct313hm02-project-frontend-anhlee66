<script setup>
import { Form,Field,ErrorMessage} from 'vee-validate'
import courseService from '@/services/course.service';
// import * as yup from 'yup'
import {ref,onMounted} from 'vue'
// import { string } from 'yup';

const props = defineProps({
    file:{type:Object, required:true},
})


const $emit = defineEmits(['submitUpload:file'])
const file = ref({...props.file })
const courses = ref({})

async function getAllCourse(){
    courses.value  = await courseService.getAllCourse()
}

function submitFile(){
    $emit('submitUpload:file',file.value)
}

onMounted(()=>getAllCourse())
</script>

<template>
    <div class="">
        <Form @submit="submitFile" enctype="multipart/form-data"  >
            <div class="form-group">
                <label for="title">Enter your Documents title:</label>
                <Field name="title" class="form-control" v-model="file.title"/>
                <ErrorMessage name="title" class="error-feedback text-danger"/>
            </div>
            <div class="form-group ">
                    <label for="course">Choose course:</label>
                    <select name="course" class="form-control" v-model="file.courseID">
                        // eslint-disable-next-line vue/require-v-for-key
                        <option v-for="course in courses" :key="course.courseID" :value="course.courseID">{{ course.courseName}}</option>
                    </select>
                    <ErrorMessage name="course" class="error-feedback text-danger"/>
                </div>
            <div class="dropbox">
                <input class="input-file" type="file" multiple name="file" @change="(e) => file.fileUpload=e.target.files[0]">
                    <p >
                    Drag your file(s) here to begin<br> or click to browse
                </p>
                <p >
                    <!-- Uploading {{ fileCount }} files... -->
                </p>
                <ErrorMessage name="file" class="error-feedback text-danger"/>
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary float-right rounded-pill" :disabled="!file.fileUpload">
                    <i class="fa-solid fa-right-long"></i>
                    Submit Documents
                </button>
            </div>
        </Form>
        <p v-if="file.fileUpload">Select {{ file  }} </p>
</div>
</template>

<style lang="scss">
@import "../assets/FormUpload.scss";
</style>