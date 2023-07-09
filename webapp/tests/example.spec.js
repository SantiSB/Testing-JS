// Importa las funciones 'test' y 'expect' de la biblioteca '@playwright/test'
const { test, expect } = require('@playwright/test');

// Define una prueba llamada 'Basic test'
test('Basic test', async ({ page }) => {
  // Navega a la página 'https://playwright.dev/'
  await page.goto('https://playwright.dev/');

  // Crea un localizador para el elemento con la clase '.navbar__inner .navbar__title'
  const title = page.locator('.navbar__inner .navbar__title');

  // Verifica que el elemento localizado tenga un texto que coincida con la expresión regular /Playwright/
  await expect(title).toHaveText(/Playwright/);
});
