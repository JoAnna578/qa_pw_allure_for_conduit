import { test, expect } from '../_fixtures/fixturesGeneric';

test('Log out user', async ({ pages }) => {
  const page = pages[0];

  await page.goto('/');
  await page.locator('a[href="/logout"]').click();

  await expect(page).toHaveURL('/login');
});
