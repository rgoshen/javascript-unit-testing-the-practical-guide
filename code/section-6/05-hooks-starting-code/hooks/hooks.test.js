import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail);
});

beforeEach(() => {
  user = new User(testEmail);
});

afterEach(() => {
  // user = new User(testEmail);
});

afterAll(() => {
  console.log('afterAll');
});

// can add concurrent tests by using it.concurrent or
// you can add concurrent on the describe block to add it
// to all tests in the describe block

//Even when not adding the .concurrent property / annotation,
// tests that are stored in different files are executed concurrently

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
