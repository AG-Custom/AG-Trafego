<script setup>
import BaseIcon from '../ui/BaseIcon.vue'
</script>

<template>
  <section id="sobre" class="section about-section">
    <div class="container about-layout">
      <div class="about-visual" aria-hidden="true">
        <div class="monogram">AB</div>
        <div class="about-map"><span class="map-dot d1"></span><span class="map-dot d2"></span><span class="map-dot d3"></span><i></i></div>
        <div class="about-badge"><BaseIcon name="shield" :size="20" /><span>Comunicação responsável<br /><strong>em cada segmento</strong></span></div>
      </div>
      <div class="about-copy"><span class="eyebrow gold"><i></i>Quem está por trás da estratégia</span><h2>Prazer, eu sou<br />Alexandre Baiocco.</h2><p>Atuo com Gestão de Tráfego para construir operações de anúncios que conectam planejamento de mídia, campanhas, rastreamento e análise de dados.</p><p>Cada negócio tem um público, uma região e uma jornada diferentes. Por isso, cada estratégia também é única — com clareza, acompanhamento próximo e comunicação responsável.</p><a href="#contato" class="about-link">Vamos conversar <BaseIcon name="arrow" :size="18" /></a></div>
    </div>
  </section>
</template>
