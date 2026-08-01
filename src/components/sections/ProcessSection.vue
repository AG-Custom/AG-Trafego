<script setup>
import { steps } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="processo" class="section process-section">
    <div class="container">
      <SectionHeading 
        eyebrow="Como eu trabalho" 
        title="Uma operação completa para impulsionar o crescimento do seu negócio." 
        text="O problema raramente está apenas no anúncio."
        subtext="Por isso, cada etapa trabalha conectada à próxima." centered />
      <div class="process-grid">
        <article v-for="step in steps" :key="step.number" class="process-step">
          <div class="step-top"><span>{{ step.number }}</span><i></i></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
