import { describe, it, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

/**
 * can not use vi.mock for fetch because it is a globally
 * available function and not an importable module.
 *
 * However, we can use vi.stubGlobal to mock the fetch function.
 */

const testData = { key: 'test' };
const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available response data', () => {
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('should convert the provided data into JSON before sending the request', async () => {
    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error.message;
    }

    expect(errorMessage).not.toBe('Not a string.');
  });

  it('should throw an HttpError in case of non-ok responses', () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
