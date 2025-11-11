<script setup></script>

<template>
  <div class="app">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/testing">Testing</RouterLink>
      <RouterLink to="/test/123">Test 123</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
.app {
  max-width: 480px;
  margin: 2rem auto;
  padding: 1rem;
}
.nav {
  display: flex;
  gap: 1rem;
}
.nav a {
  color: inherit;
  text-decoration: none;
}
</style>
