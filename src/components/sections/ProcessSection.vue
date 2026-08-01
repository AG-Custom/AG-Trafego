<script setup>
import { ref } from 'vue'
import { steps } from '../../data/site'
import SectionHeading from '../ui/SectionHeading.vue'

const track = ref(null)
const activeStep = ref(0)

const goToStep = (index) => {
  const item = track.value?.children[index]
  if (!item) return
  track.value.scrollTo({ left: item.offsetLeft - track.value.offsetLeft, behavior: 'smooth' })
  activeStep.value = index
}

const updateActiveStep = () => {
  if (!track.value) return
  const center = track.value.scrollLeft + track.value.clientWidth / 2
  let closest = 0
  let distance = Infinity
  Array.from(track.value.children).forEach((item, index) => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2
    const nextDistance = Math.abs(center - itemCenter)
    if (nextDistance < distance) {
      distance = nextDistance
      closest = index
    }
  })
  activeStep.value = closest
}
</script>

<template>
  <section id="processo" class="section process-section">
    <div class="container">
      <SectionHeading 
        eyebrow="Como eu trabalho" 
        title="Uma operação completa para impulsionar o crescimento do seu negócio." 
        text="O problema raramente está apenas no anúncio."
        subtext="Por isso, cada etapa trabalha conectada à próxima." centered />
      <div ref="track" class="process-grid" @scroll.passive="updateActiveStep">
        <article v-for="step in steps" :key="step.number" class="process-step">
          <div class="step-top"><span>{{ step.number }}</span><i></i></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p>
        </article>
      </div>
      <div class="process-dots" aria-label="Navegação das etapas">
        <button v-for="(_, index) in steps" :key="index" :class="{ active: activeStep === index }" :aria-label="`Ver etapa ${index + 1}`" @click="goToStep(index)"></button>
      </div>
    </div>
  </section>
</template>
