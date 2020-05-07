const puppeteer = require('puppeteer')

async function scrapeProduct(url) {

    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    await page.goto(url)

    const [el] = await page.$x('//*[@id="landingImage"]')
    const src = await el.getProperty('src')
    const imgURL = await src.jsonValue()

    console.log({imgURL})
   
    browser.close()
}

scrapeProduct('https://www.amazon.com/dp/B07Z6ZCVSG/ref=ods_gw_ha_d_dcard_lr_home_050120?pf_rd_r=TJN7ZDQE43VVGDK5ZZ5A&pf_rd_p=58d2acad-355c-4b6d-bdde-0336c6391868')
