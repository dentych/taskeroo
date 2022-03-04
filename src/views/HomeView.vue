<template>
  <main>
    <p class="text-3xl">Hejsa</p>
    <p>Tallet er: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>{{ isLoggedIn }}</p>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useAuth} from "@/stores/auth";

const count = ref(0)
const auth = useAuth()
const isLoggedIn = ref(auth.isLoggedIn)

onMounted(() => {
})

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>