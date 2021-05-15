const puppeteer = require("puppeteer");
const data = require("./config.json");
(async function()
{
   const browser = await puppeteer.launch({headless:false});
   const page = await browser.newPage();
   await page.goto("https://www.facebook.com/",{waitUntil:"networkidle2"});
   await page.type("input[name='email']",data.user,{delay:50});
   await page.type("input[name='pass']",data.pwd,{delay:50});
   
   await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
     page.click("button[type='submit']"),
   ]);
   await page.waitForTimeout(3000);
   await page.goto('https://www.facebook.com/profile.php?id=100067626204251');
   await page.waitForTimeout(2000);

   await page.type("input[placeholder='Search Facebook']","pepcoding");
   await page.waitForSelector(".bp9cbjyn.nhd2j8a9.j83agx80.ni8dbmo4.stjgntxs.l9j0dhe7.dwzzwef6.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi a",{visible:true});

   await Promise.all([
   page.waitForNavigation({waitUntil: "networkidle2"}),
   page.click(".bp9cbjyn.nhd2j8a9.j83agx80.ni8dbmo4.stjgntxs.l9j0dhe7.dwzzwef6.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi a"),
 ]);

  
})();
