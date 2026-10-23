<script setup>
import { diagnosis } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="diagnostico" class="section diagnosis-section">
    <div class="container">
      <SectionHeading
        eyebrow="Antes de anunciar"
        title="A estratégia começa entendendo quem alcançar e onde atuar."
        text="Cruzo o contexto do negócio com público, pessoas e território para definir hipóteses mais precisas para as campanhas."
      />
      <div class="diagnosis-grid">
        <article v-for="item in diagnosis" :key="item.number" class="diagnosis-card">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
      <p class="diagnosis-note">Mapas e personas orientam as escolhas iniciais. Os resultados das campanhas mostram o que manter, ajustar ou testar de novo.</p>
    </div>
  </section>
</template>
