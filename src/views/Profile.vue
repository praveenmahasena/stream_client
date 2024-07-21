<script lang="ts" setup>
import axios from 'axios'
import { ref, onBeforeMount, reactive, onMounted } from 'vue'
// @ ts-ignore

const stream = ref(false)

onBeforeMount(async () => {
    try {
        const { data } = await axios.get('http://localhost:42069/streamstatus', {
            headers: {
                'Content-Type': 'application/json',
                'X-Token': localStorage.getItem('X-userName')
            }
        })
        console.log(data)
        stream.value = data
    } catch (e) {
        console.log(e)
    }
})

async function req() {
    try {
        const { data } = await axios.put(
            'http://localhost:42069/streamstatus',
            { Status: stream.value },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': localStorage.getItem('X-userName')
                }
            }
        )
        stream.value = data
    } catch (e) {
        console.log(e)
    }
}

</script>

<template>

    <button @click.prevent="req">
        {{ stream ? 'end stream' : 'start stream' }}
    </button>





</template>

<style></style>
