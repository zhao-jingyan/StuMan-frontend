<script setup>
  import SheetManager from './Account/SheetManager.vue';
</script>

<template>
  <div class="login-container">
    <SheetManager/>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}
</style>
