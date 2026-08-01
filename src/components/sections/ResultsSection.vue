<script setup>
import { audiences } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseIcon from '../ui/BaseIcon.vue'
</script>

<template>
  <section id="publico" class="section audience-section">
    <div class="container audience-layout">
      <div>
        <SectionHeading 
        eyebrow="Para quem é" 
        title="Estratégia para negócios que querem atrair clientes e crescer com consistência." 
        text="Para marcas, empresas e profissionais que desejam fortalecer sua presença digital e transformar investimento em oportunidades reais de negócio." light />
      </div>
      <div class="audience-list">
        <div v-for="item in audiences" :key="item">
          <BaseIcon name="check" :size="18" />
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
