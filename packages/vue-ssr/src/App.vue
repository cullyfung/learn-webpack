<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>

    <div class="btn-group">
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
    </div>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
