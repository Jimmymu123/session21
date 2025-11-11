<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => route.params.id);
</script>

<template>
  <section>
    <h1>Test ID</h1>
    <p>id: {{ id }}</p>
  </section>
</template>
