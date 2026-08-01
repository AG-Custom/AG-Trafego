<script setup>
defineProps({ eyebrow: String, title: String, text: String, light: Boolean, centered: Boolean })
</script>

<template>
  <div class="section-heading" :class="{ light, centered }">
    <span class="eyebrow"><i></i>{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
  </div>
</template>
