import { test, expect } from '../_fixtures/fixturesGeneric';

test('Update username from settings', async ({ pages, user }) => {
  const page = pages[0];

  await page.goto('/settings');

  const usernameInput = page.locator('input[placeholder="Username"]');
  await usernameInput.fill(user.username + '_updated');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.success-message')).toHaveText(
    'Your settings have been saved.',
  );
});
