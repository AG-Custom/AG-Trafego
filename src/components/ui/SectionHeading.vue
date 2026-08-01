<script setup>
defineProps({ eyebrow: String, title: String, text: String, subtext: String, light: Boolean, centered: Boolean })
</script>

<template>
  <div class="section-heading" :class="{ light, centered }">
    <span class="eyebrow"><i></i>{{ eyebrow }}<i></i></span>
    <h2>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
    <p v-if="subtext">{{ subtext }}</p>
  </div>
</template>
