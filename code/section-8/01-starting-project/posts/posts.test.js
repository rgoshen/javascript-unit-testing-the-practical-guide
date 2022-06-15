import { describe, it, expect, beforeEach } from 'vitest';
import { extractPostData } from './posts';

const testTitle = 'Test Title';
const testContent = 'Test Content';
let testForm;

describe('extractPostData()', () => {
  beforeEach(() => {
    testForm = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });
  it('should extract title and content from the provided form data', () => {
    const data = extractPostData(testForm);
    expect(data).toMatchObject({ title: testTitle, content: testContent });
  });
});
