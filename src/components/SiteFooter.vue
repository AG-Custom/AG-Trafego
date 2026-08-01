<script setup>
import BaseIcon from './ui/BaseIcon.vue'
import logo from '../assets/images/logo.svg'
</script>

<template>
  <footer>
    <div class="container footer-top">
      <div class="footer-brand"><div class="footer-logo"><img :src="logo" alt="" /><strong>Alexandre<br />Baiocco</strong></div><p>Gestão de Tráfego orientada por estratégia, dados e conversão.</p><span>Meta Ads · Google Ads · Rastreamento</span></div>
      <div class="footer-links"><strong>Navegação</strong><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#processo">Como funciona</a><a href="#publico">Para quem</a></div>
      <div class="footer-links"><strong>Contato</strong><a href="https://wa.me/5527997920801" target="_blank" rel="noopener">(27) 99792-0801</a><a href="mailto:alexandrebaiocco@gmail.com">alexandrebaiocco@gmail.com</a><a href="https://instagram.com/baioccoale" target="_blank" rel="noopener">@baioccoale</a></div>
      <div class="footer-social"><strong>Redes</strong><div><a href="https://instagram.com/baioccoale" target="_blank" rel="noopener" aria-label="Instagram"><BaseIcon name="instagram" :size="19" /></a><a href="https://www.linkedin.com/in/alexandre-baiocco/" aria-label="LinkedIn"><BaseIcon name="linkedin" :size="19" /></a></div></div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} Alexandre Baiocco. Todos os direitos reservados.</span><span>Estratégia para crescer com clareza.</span></div>
  </footer>
</template>
