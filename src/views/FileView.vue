<script setup>
import {ref,onMounted,watch} from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'
import fileService from '@/services/file.service';
import userService from '@/services/user.service';
import store from '@/store/store';
// import { useRouter } from 'vue-router';
// const $router = useRouter()
const props = defineProps({
    fileID:{type:String, required:true,default:''}
})
const user = ref(store.state.user)
const fileID = ref(props.fileID)
const userID = ref(0)
const path = ref('')
const title = ref('')
const like = ref(store.state.like)
const likeStatus = ref(false)
async function getPath (){
    const file = await fileService.getFileById(fileID.value)
    path.value = file.path
    title.value = file.title
    // console.log(path.value,':',fileID.value)
}
async function checkLike(){
    const data = await userService.getUserInfo(user.value)
    userID.value= data.userID

    if(userID.value)
    {
        const res = await fileService.checkLike(fileID.value, userID.value)
        console.log('id', userID.value, fileID.value, res)
        if(res.status == 'true'){
            likeStatus.value = true
        }
    }
   
}
async function getLike(){
    const data = await fileService.getLike(fileID.value)
    if(data)
    {
        like.value = data.like
        store.commit('setLike',like.value)
        console.log('like', store.state.like)

    }
}
async function action(){
    likeStatus.value = !likeStatus.value
   
    const res = await fileService.updateLike(fileID.value,userID.value,`${likeStatus.value}`)
    // console.log(res)
    if(res){
        if (likeStatus.value) {
            store.commit('incrementLike')
        } else {
            store.commit('decrementLike')
        }
    }
    //  console.log('like', store.state.like)
}

onMounted(() => {
    getPath()
    checkLike()   
    getLike() 
})
watch(likeStatus.value,() =>getLike())
</script>
<template>
    <div class="view">
        <div class="tool">
            <button class="btn btn-success btn-tool">
                <a class="text-white" :href="`/files/${path}`" download>
                    <i class="fa-solid fa-download"></i>Download
                </a>
            </button>
            <button class="btn btn-tool like-tool"  @click="action()">
                <i class="fa-solid fa-heart" v-if="likeStatus"></i>
                <i class="fa-regular fa-heart" v-else></i>
                {{ store.state.like }}
            </button>
            <button class="btn btn-tool save"><i class="fa-regular fa-bookmark"></i>Save</button>
        </div>
        <div>
            <h3 class="text-center">{{ title}}</h3>
        </div>
        <div class="file-view">
            <vue-pdf-embed :source="`/files/${path}`" width="900"/>
        </div>
    </div>
    
    <!-- {{path}} -->
</template>
<style>
.view{
    display: flex;
    flex-direction: column;
    margin-top:30px;
    margin: 0;
    background-color: aliceblue;
    justify-content: center;
}
.tool{
    background-color: rgb(223, 220, 214);
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.text-center{
    margin:20px auto;
}
.btn-tool{
    width:150px ;
    border-radius: 20px;
    margin: 0 10px;
    border: 1px #00b8ff solid;
}
.like-tool{
    color:#ff0000;
    font-size: large;
}
.like-tool:hover{
    background-color: #c6d0d4;
    color:#ff0000;
}


.like:hover{
    background-color: #315ecf;
}
.save:hover{
    background-color: #c6d0d4;
}
.file-view{
    width: 920px;
    height: 700px;
    overflow: scroll;
    margin: auto;
}
</style>