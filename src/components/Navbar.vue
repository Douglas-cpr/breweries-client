<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <h1 class="navbar__logo">Breweries</h1>
    <p class="navbar__brand">A breweries list by Open Brewery DB</p>
  </nav>
</template>

<style scoped>
.navbar {
  height: auto;
  width: 100%;
  background-color: var(--navbar-bg);
  color: var(--navbar-color);
  padding: 4% var(--default-width-padding);
}

.navbar__brand {
  color: var(--navbar-subtitle);
}
</style>
