import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.search('Red Lipstick');
  const searchCard = await page.getByText(/Red Lipstick/).first()
  await expect(searchCard).toHaveText('Red Lipstick')
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.selectBrand('Essence');
  const apples = await page.getByText('Apple')
  const searchCard = await page.getByRole('link', { name: 'Essence Mascara Lash Princess' })
  expect(searchCard).toBeVisible()
  expect(apples).not.toBeVisible()
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');
  expect(page).toHaveURL('/products/4')
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const firstCard = await page.getByRole('link', { name: 'Essence Mascara Lash Princess' })
  await model.nextPage();
  expect(firstCard).not.toBeVisible()
  // END
});

