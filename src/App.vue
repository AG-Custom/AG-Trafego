<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProblemsSection from './components/sections/ProblemsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ResultsSection from './components/sections/ResultsSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <ProblemsSection />
    <ProcessSection />
    <ServicesSection />
    <ResultsSection />
    <AboutSection />
    <FaqSection />
    <CtaSection />
  </main>
  <SiteFooter />
</template>
