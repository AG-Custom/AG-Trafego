# Alexandre Baiocco — Landing page profissional

Landing page estática criada com Vue 3 e Vite. Não utiliza backend.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

- `src/components/sections`: seções completas da página
- `src/components/ui`: componentes visuais reutilizáveis
- `src/data/site.js`: textos, serviços, público e perguntas editáveis
- `src/assets/styles/main.css`: identidade visual e responsividade

A página utiliza somente a logo e elementos gráficos interativos; não há fotografias de pessoas.

## Medição de contato

Para habilitar o Google Analytics 4, configure `VITE_GA_MEASUREMENT_ID` com o ID de medição da sua propriedade (`G-...`) no ambiente de build. O arquivo `.env.example` mostra o formato esperado. Sem essa variável, nenhum script do GA4 é carregado.

Com o GA4 habilitado, os cliques em links do WhatsApp geram o evento `whatsapp_click`. Um clique **não confirma** que a pessoa enviou a mensagem ou se tornou um lead. Para acompanhar leads efetivos, use também os registros de atendimento ou uma integração de conversões própria. Publique uma política de privacidade e configure a coleta de acordo com as exigências aplicáveis antes de ativá-la.
