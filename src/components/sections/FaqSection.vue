<script setup>
import { ref } from 'vue'
import { faqs } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseIcon from '../ui/BaseIcon.vue'

const openItem = ref(0)
const toggle = (index) => { openItem.value = openItem.value === index ? -1 : index }
</script>

<template>
  <section class="section faq-section">
    <div class="container faq-layout">
      <div>
        <SectionHeading eyebrow="Perguntas frequentes" title="Antes de começar, talvez você queira saber." />
        <p class="faq-contact">Ainda tem alguma dúvida? <a href="mailto:alexandrebaiocco@gmail.com">Fale comigo →</a></p>
      </div>
      <div class="faq-list">
        <article v-for="(faq, index) in faqs" :key="faq.question" :class="{ open: openItem === index }">
          <button @click="toggle(index)"><span>{{ faq.question }}</span><BaseIcon name="chevron" :size="20" /></button>
          <div class="faq-answer"><p>{{ faq.answer }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
