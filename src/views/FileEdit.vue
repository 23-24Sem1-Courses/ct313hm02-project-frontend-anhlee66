<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import courseService from '@/services/course.service';
import fileService from '@/services/file.service';
// import * as yup from 'yup'
import { ref, onMounted } from 'vue'
// import { string } from 'yup';

const props = defineProps({
    fileID: { type: Number, required: true },
})
const file = ref('')


// const $emit = defineEmits(['submitUpload:file'])
const fileID = ref({ ...props.fileID })
const courses = ref({})

async function getAllCourse() {
    courses.value = await courseService.getAllCourse()
}

async function getFile(){
    const data = fileService.getFileById(fileID.value)
    file.value = data
}

onMounted(() => {
    getAllCourse();
    getFile();
})
</script>

<template>
    <div class="">
        <Form @submit="submitFile">
            <div class="form-group">
                <label for="title">Enter your Documents title:</label>
                <Field name="title" class="form-control" v-model="file.title" />
                <ErrorMessage name="title" class="error-feedback text-danger" />
            </div>
            <div class="form-group ">
                <label for="course">Choose course:</label>
                <select name="course" class="form-control" v-model="file.courseID">
                    // eslint-disable-next-line vue/require-v-for-key
                    <option v-for="course in courses" :key="course.courseID" :value="course.courseID">{{ course.courseName }}
                    </option>
                </select>
                <ErrorMessage name="course" class="error-feedback text-danger" />
            </div>
            <div class="form-group ">
                    <label for="description">Choose course:</label>
                    <Field type="text-area"/>
                    <ErrorMessage name="description" class="error-feedback text-danger" />
            </div>
            
            <div class="form-group btn btn-secondary float-left rounded-pill">
                <a href="/" class="text-white">
                    <i class="fa-solid fa-left-long"></i>
                    Go Back</a>
            </div>
            <div class="form-group">
                <button class="btn btn-primary float-right rounded-pill">
                    <i class="fa-solid fa-right-long"></i>
                    Submit Documents
                </button>
            </div>
        </Form>
        <!-- <p v-if="file.fileUpload">Select {{ file  }} </p> -->
    </div>
</template>

<style lang="scss">@import "../assets/FormUpload.scss";</style>