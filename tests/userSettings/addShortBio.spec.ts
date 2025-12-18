import { test, expect } from '../_fixtures/fixturesGeneric';

test('Add short bio from settings', async ({ pages, user }) => {
  const page = pages[0];

  await page.goto('/settings');

  const bioInput = page.locator('textarea[placeholder="Short bio about you"]');
  await bioInput.fill('This is a test bio.');

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('.success-message')).toHaveText(
    'Your settings have been saved.',
  );
});
