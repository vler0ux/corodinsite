import { test, expect } from '@playwright/test';

    test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5500/');
    });

    test('le calcul 1 + 1 + 1 doit renvoyer 0', async ({ page }) => {
    await page.locator('#lune').fill('1');
    await page.locator('#soleil').fill('1');
    await page.locator('#terre').fill('1');

    const button = page.locator('button');
    await expect(button).toBeEnabled();

    await button.click();

    const result = await page.locator('#resultat').innerText();
    expect(result).toContain('0');
    });