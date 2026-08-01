<script setup>
import { ref } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'

const tilt = ref({ '--tilt-x': '0deg', '--tilt-y': '0deg' })
const moveVisual = (event) => {
  const box = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - box.left) / box.width - 0.5
  const y = (event.clientY - box.top) / box.height - 0.5
  tilt.value = { '--tilt-x': `${-y * 3}deg`, '--tilt-y': `${x * 4}deg` }
}
const resetVisual = () => { tilt.value = { '--tilt-x': '0deg', '--tilt-y': '0deg' } }
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-line-art" aria-hidden="true">
      <svg viewBox="0 0 900 620" preserveAspectRatio="none">
        <defs><linearGradient id="goldStroke" x1="0" x2="1"><stop stop-color="#c9a265" stop-opacity=".05"/><stop offset="1" stop-color="#ae8240"/></linearGradient></defs>
        <path d="M5 540 C145 540 190 490 285 465 S410 390 482 312 S590 250 665 176 S770 96 864 36" />
        <path class="arrow-head" d="M836 40l29-5-6 29" />
      </svg>
    </div>
    <div class="container hero-inner">
      <div class="hero-copy">
        <span class="eyebrow"><i></i> Gestão de Tráfego · Meta Ads · Google Ads</span>
        <h1>Estratégia para transformar atenção em <em>crescimento.</em></h1>
        <p>Gestão de Tráfego estratégica para negócios locais, marcas e profissionais que desejam atrair clientes e crescer com consistência.</p>
        <div class="hero-actions">
          <a href="#contato" class="btn btn-dark btn-large">Quero uma análise estratégica <BaseIcon name="message" :size="19" /></a>
          <a href="#processo" class="text-link">Entenda como funciona <span>↓</span></a>
        </div>
        <div class="platforms-inline"><span>Meta Ads</span><i></i><span>Google Ads</span><i></i><span>Rastreamento</span></div>
      </div>

      <div class="strategy-visual" :style="tilt" aria-label="Fluxo interativo da operação de Gestão de Tráfego" @pointermove="moveVisual" @pointerleave="resetVisual">
        <div class="visual-orbit orbit-a"></div><div class="visual-orbit orbit-b"></div>
        <div class="visual-center"><span>AB</span><small>Estratégia<br />integrada</small></div>
        <div class="visual-card card-a"><span class="visual-icon"><BaseIcon name="target" /></span><div><small>Aquisição</small><strong>Campanhas</strong></div><b>01</b></div>
        <div class="visual-card card-b"><span class="visual-icon"><BaseIcon name="layers" /></span><div><small>Comunicação</small><strong>Posicionamento</strong></div><b>02</b></div>
        <div class="visual-card card-c"><span class="visual-icon"><BaseIcon name="chart" /></span><div><small>Decisão</small><strong>Dados</strong></div><b>03</b></div>
        <div class="conversion-chip"><span></span> Jornada conectada</div>
      </div>
    </div>
  </section>
</template>
