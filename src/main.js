import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

createApp(App).mount('#app')

// O clique indica intenção de contato; a conversa enviada no WhatsApp não é confirmada aqui.
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
if (measurementId && /^G-[A-Z0-9]+$/.test(measurementId)) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href*="wa.me/"]') : null
    if (!link) return
    window.gtag('event', 'whatsapp_click', {
      link_location: link.href,
      link_text: link.textContent.trim().replace(/\s+/g, ' '),
    })
  })
}
