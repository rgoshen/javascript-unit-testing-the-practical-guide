import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
  it('should generate a token value', (done) => {
    const testUserEmail = 'testUser@example.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        //   expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe('generateTokenPromise()', () => {
  it('should generate a token value', () => {
    // option 1: using a promise
    const testUserEmail = 'testUser@example.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it('should generate a token value', async () => {
    // option 2: using an async/await
    const testUserEmail = 'testUser@example.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
    expect(token).toBeTypeOf('string');
  });
});
