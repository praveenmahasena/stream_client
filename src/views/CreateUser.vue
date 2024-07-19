<script setup lang="ts">
import {reactive} from 'vue'
import axios from 'axios';

const user= reactive({
    Name:'',
    Password:''
})

async function create(){
    try{
        const {data}= await axios.post('http://localhost:42069/create',user,{
            headers:{
                'Content-Type':'application/json',
            }
        })
        console.log(data)
    }catch(e){
        console.log(e)
    }
}


</script>

<template>

    <div>
        <form @submit.prevent="create">
            <input type='text' placeholder="name" v-model='user.Name'>
            <input type='text' placeholder="passoword" v-model="user.Password">
            <button>
                create
            </button>
        </form>
    </div>


</template>


<style>

</style>
