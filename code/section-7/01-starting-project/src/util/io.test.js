import { describe, it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';
describe('writeData()', () => {
  vi.mock('fs'); // kicks in vi automocks for fs...vi will go find fs and resplace with a series of spies
  it('should execute the writeFile method', () => {
    const testData = 'test data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    // Side effect: writes test data to test.txt and stores in data folder
    // this could be bad because it could overwrite or delete prod data
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    expect(fs.writeFile).toBeCalled();
  });
});
