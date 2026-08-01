<script setup>
import { problems } from '../../data/site'
import BaseIcon from '../ui/BaseIcon.vue'
</script>

<template>
  <section class="problems-section">
    <div class="container problems-layout">
      <div><span class="eyebrow gold"><i></i>Talvez sua empresa esteja passando por isso</span><h2>Você investe, mas os resultados não aparecem como deveriam.</h2></div>
      <ul><li v-for="item in problems" :key="item"><BaseIcon name="arrow" :size="16" />{{ item }}</li></ul>
    </div>
  </section>
</template>
