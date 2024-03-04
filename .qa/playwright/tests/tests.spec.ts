import { test, expect } from '@playwright/test';
//When this test runs Successfully it verifies that everything is setup correctly.
test('Log into the Billing Portal Successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading')).toContainText('Welcome');  
})

