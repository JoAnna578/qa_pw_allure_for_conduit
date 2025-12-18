import { test, expect } from '../_fixtures/fixturesGeneric';

test('Add profile picture URL from settings', async ({ pages, user }) => {
  const page = pages[0];

  await page.goto('/settings');

  const imageInput = page.locator(
    'input[placeholder="URL of profile picture"]',
  );
  await imageInput.fill('https://example.com/avatar.png');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.success-message')).toHaveText(
    'Your settings have been saved.',
  );
});
