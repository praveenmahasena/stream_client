<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'

import {useRouter} from 'vue-router'

const r=useRouter()

const user = reactive({
    Name: ''
})

async function login() {
    try {
        const {data}=await axios.post('http://localhost:42069/login',user,{
            headers:{
                "Content-Type":'application/json',
            }
        })
        console.log(data)
        localStorage.setItem('X-userName',data)
        r.push('/profile')

    } catch (e) {
        console.log(e)
    }
}
</script>

<template>

    <form @submit.prevent='login'>

        <input type='text' placeholder="user name" v-model="user.Name">
        <button>
            login
        </button>

    </form>

</template>

<style></style>
