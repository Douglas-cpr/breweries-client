<script setup lang="ts">
defineProps({
  footerText: {
    type: String,
    default: 'Breweries List © 2022',
  }
})
</script>

<template>
  <div class="footer">
    <p class="footer__text">{{ footerText }}</p>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  font-weight: bold;
  height: 30px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-bg);
}
</style>
