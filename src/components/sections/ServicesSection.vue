<script setup>
import { services } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseIcon from '../ui/BaseIcon.vue'
</script>

<template>
  <section id="servicos" class="section services-section">
    <div class="container services-layout">
      <div class="services-intro">
        <SectionHeading 
        eyebrow="O que está incluído" 
        title="Planejamento, gestão e análise das suas campanhas."
        text="Uma gestão próxima, orientada por dados e adaptada à realidade do seu negócio. A produção de imagens e vídeos não está incluída." />
      </div>
      <div class="services-list">
        <article v-for="service in services" :key="service.title">
          <span>
            <BaseIcon :name="service.icon" :size="21" />
          </span>
          <div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
