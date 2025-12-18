import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update email from settings', async ({ pages, user }) => {
  const page = pages[0];

  await page.goto('/settings');

  const emailInput = page.locator('input[placeholder="Email"]');
  await emailInput.fill(user.email.replace('@', '+updated@'));

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.success-message')).toHaveText(
    'Your settings have been saved.',
  );
});
