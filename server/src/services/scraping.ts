import puppeteer from "puppeteer";

export class Scrap {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async scrappAll() {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(this.url);
      let data = await page.evaluate(() => {
        let results: any = [];
        let items = document.querySelectorAll(".item_annonce");
        items.forEach((item) => {
          const currentItem = item.querySelector(
            ".contenu_annonce > h3 > a"
          ) as any;
          results.push({
            title: item ? currentItem.innerText : "",
          });
        });

        return results;
      });
      await browser.close();
      return data;
    } catch (error) {
      console.log("error from puppeteer : ", error);
    }
  }
}
