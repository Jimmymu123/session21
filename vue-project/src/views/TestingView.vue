<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
</script>

<template>
  <section>
    <h1>Testing</h1>
    <button @click="increment">Clicked {{ count }} times</button>
  </section>
</template>
