<script setup>
defineProps({ name: { type: String, required: true }, size: { type: Number, default: 24 } })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'arrow'">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M15 9l5-5M16 4h4v4" />
    </template>
    <template v-else-if="name === 'chart'">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
    </template>
    <template v-else-if="name === 'pulse'">
      <path d="M3 12h4l2.2-6 4.1 12 2.3-6H21" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="M5 5l14 14M19 5L5 19" />
    </template>
    <template v-else-if="name === 'chevron'">
      <path d="M6 9l6 6 6-6" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="M5 12l4 4L19 6" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <path d="M6 9v10M6 5.5v.01M10.5 19v-6a4 4 0 018 0v6M10.5 9v10" />
    </template>
    <template v-else-if="name === 'message'">
      <path d="M20 11.5a8 8 0 01-8.5 8L4 21l1.5-5A8 8 0 1120 11.5z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3l7 3v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" />
    </template>
    <template v-else-if="name === 'layers'">
      <path d="M12 3L3 8l9 5 9-5-9-5z" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </template>
  </svg>
</template>
