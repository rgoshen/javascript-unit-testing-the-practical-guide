import { describe, it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';
describe('writeData()', () => {
  vi.mock('fs'); // kicks in vi automocks for fs...vi will go find fs and replace with a series of spies

  // mock out the path.join function because we just want it to return the filename so it will be easier to test
  vi.mock('path', () => {
    return {
      default: {
        join: (...args) => {
          return args[args.length - 1]; // last argument is the filename
        },
      },
    };
  }); //we don't want vi to automock this, so we'll just mock it out by passing in a function as a second argument
  it('should execute the writeFile method', () => {
    const testData = 'test data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    // Side effect: writes test data to test.txt and stores in data folder
    // this could be bad because it could overwrite or delete prod data
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    // expect(fs.writeFile).toBeCalled();

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });

  it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'test data';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
