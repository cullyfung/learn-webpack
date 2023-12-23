<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <h1>Hello Vue 3!</h1>
    <p>
      <button @click="count++">count is: {{ count }}</button>
    </p>
    <p>
      <button @click="count--">count is: {{ count }}</button>
    </p>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
