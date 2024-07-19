<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

const live = ref(false)

onBeforeMount(async () => {
  try {
    const { data } = await axios.get('http://localhost:42069/streamstatus', {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-userName')
      }
    })
    console.log(data)
    live.value = data
  } catch (e) {
    console.log(e)
  }
})

async function req() {
  try {
    const {data} = await axios.put('http://localhost:42069', null, {
      headers: {
        'Content-Type': 'application/json',
        'X-Token': localStorage.getItem('X-userName')
      }
    })
    live.value=data
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <button @click.prevent="req">
    {{ !live ? 'stream' : 'no to stream' }}
  </button>
</template>

<style></style>
