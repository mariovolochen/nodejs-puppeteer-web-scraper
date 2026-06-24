# Node.js Puppeteer Web Scraper 🤖🕷️

Um script robusto em Node.js usando **Puppeteer** (Headless Chrome) para navegar em sites dinâmicos, extrair dados e salvá-los em um arquivo JSON.

Saber fazer *Web Scraping* é uma habilidade fundamental para desenvolvedores backend hoje em dia, pois permite alimentar bancos de dados com informações de APIs fechadas ou sites de concorrentes.

## 🛠️ Como Instalar
```bash
git clone https://github.com/mariovolochen/nodejs-puppeteer-web-scraper.git
cd nodejs-puppeteer-web-scraper
npm install
```

## 🚀 Como Usar
Para iniciar a raspagem de dados:
```bash
npm start
```
O script abrirá o navegador invisível, carregará a página desejada, executará o Javascript interno do site, capturará os textos e gerará um arquivo `data.json` na raiz da pasta.
