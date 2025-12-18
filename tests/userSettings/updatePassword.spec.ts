import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update password from settings', async ({ pages, user }) => {
  const page = pages[0];

  await page.goto('/settings');

  const passwordInput = page.locator('input[placeholder="New Password"]');
  await passwordInput.fill('NewPass123!');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.success-message')).toHaveText(
    'Your settings have been saved.',
  );
});
