import { test, expect } from '@playwright/test';

    test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5500/');
    });

test('le txt apparait', async ({ page }) => {

    await page.locator('#lune').fill('1');
    await page.locator('#soleil').fill('2');
    await page.locator('#terre').fill('1');

    const button = page.locator('#calculer');
    await expect(button).toBeEnabled();

    await button.click();

    const result = page.locator('#resultat');
    await expect(result).not.toHaveText('');

});
