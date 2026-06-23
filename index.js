const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log('🤖 Iniciando o Web Scraper...');
    
    // Inicia o navegador (headless: true = invisível)
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Define a URL alvo (exemplo)
    const targetUrl = 'https://news.ycombinator.com/';
    console.log(`🌍 Acessando a página: ${targetUrl}`);
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });

    // Extrai os dados rodando Javascript dentro do navegador
    console.log('🔍 Extraindo informações...');
    const extractedData = await page.evaluate(() => {
        const items = [];
        const rows = document.querySelectorAll('.athing');
        
        rows.forEach(row => {
            const titleElement = row.querySelector('.titleline > a');
            if (titleElement) {
                items.push({
                    title: titleElement.innerText,
                    link: titleElement.href
                });
            }
        });
        
        return items;
    });

    console.log(`✅ ${extractedData.length} itens extraídos!`);

    // Salva os dados em um arquivo JSON
    fs.writeFileSync('data.json', JSON.stringify(extractedData, null, 2));
    console.log('💾 Dados salvos em data.json');

    // Fecha o navegador
    await browser.close();
    console.log('🏁 Scraper finalizado com sucesso.');
})();
