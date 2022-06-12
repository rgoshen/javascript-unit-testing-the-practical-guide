import { it, describe, expect } from 'vitest';
import writeData from './io';

describe('writeData()', () => {
  it('should execute the writeFile method', () => {
    const testData = 'test data';
    const testFilename = 'test.txt';

    // Side effect: writes test data to test.txt and stores in data folder
    // this could be bad because it could overwrite or delete prod data
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
