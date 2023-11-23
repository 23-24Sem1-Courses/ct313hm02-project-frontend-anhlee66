<script setup>
import fileService from '@/services/file.service';
import FormUpload from '@/components/FormUpload.vue'
import {ref} from 'vue'
const file = ref({})
// eslint-disable-next-line no-unused-vars
async function submitFile(file){
    // console.log('submit file',file);
    const res = await fileService.uploadFile(file)  
        
    if (res.status == 400) console.log('No file');
        // console.log(res)
    console.log(res)
    alert(`Upload a new file ${res.message}`)
}

</script>
<template>
    <div class="upload-header">
        <a href="/" class="navbar-brand h1 text-body fs-1">
            <i class="fa-regular fa-folder-open fa-xl"></i>
            DocSharing</a>
    </div>
   <div class="contain">
        <div class="form-upload">
            <!-- <FormUpload /> -->
            <FormUpload  :file="file" @submit-upload:file="submitFile"  />
        </div>
        <!-- <div>
            <button class="btn btn-secondary rounded-pill">Previous</button>
            <button class="btn btn-primary float-right rounded-pill">
                <i class="fa-solid fa-right-long"></i>
                Submit Documents
            </button>
        </div> -->
   </div>
   
</template>
<style lang="scss">
.contain{
    max-width: 900px;
    min-height: 600px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    // display: flex;
    // justify-content: center;
    margin: 0 auto;
}
.upload-header{
    text-align: center;
    height: 100px;
    padding: 30px;
    background-color: rgb(199, 195, 195);
}
.form-upload{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

</style>

