<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'
import logo from '../assets/images/logo.svg'

const menuOpen = ref(false)
const scrolled = ref(false)
const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Para quem', href: '#publico' },
]
const handleScroll = () => { scrolled.value = window.scrollY > 16 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="{ scrolled }">
    <div class="container header-inner">
      <a href="#inicio" class="brand" aria-label="Alexandre Baiocco - início"><img :src="logo" alt="" /><span>Alexandre<br />Baiocco</span></a>
      <nav :class="{ open: menuOpen }" aria-label="Navegação principal">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}</a>
        <a href="#contato" class="btn btn-dark nav-cta" @click="menuOpen = false">Análise estratégica <BaseIcon name="message" :size="17" /></a>
      </nav>
      <button class="menu-toggle" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" @click="menuOpen = !menuOpen"><BaseIcon :name="menuOpen ? 'close' : 'menu'" /></button>
    </div>
  </header>
</template>
