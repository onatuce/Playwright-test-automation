import { expect, test } from '@playwright/test';

test('should get list of users from API', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toBeDefined();
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThan(0);
  expect(responseBody[0]).toHaveProperty('id');
  expect(responseBody[0]).toHaveProperty('email');
});