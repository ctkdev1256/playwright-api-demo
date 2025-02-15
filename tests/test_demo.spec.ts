import {test} from '@playwright/test';

test('Playwright test demo', async({page})=>{
    await page.goto('https://www.google.com');
    await page.close()
})

test('Playwright second test', ()=>{
    console.log("Test")
})