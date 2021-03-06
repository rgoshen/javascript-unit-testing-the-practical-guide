/**
 * @vitest-environment happy-dom
 */

import fs from 'fs';
import path from 'path';

import { beforeEach, describe, it, expect, vi } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath, 'utf8').toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal('document', document);

describe('showError()', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
  });
  it('should add an error paragraph to the id="errors" element', () => {
    showError('Error message');

    const errorElement = document.getElementById('errors');
    const errorParagaph = errorElement.firstElementChild;

    expect(errorParagaph).not.toBeNull();
  });

  it('should show the error message in error paragraph', () => {
    showError('Error message');

    const errorElement = document.getElementById('errors');
    const errorParagaph = errorElement.firstElementChild;

    expect(errorParagaph.textContent).toBe('Error message');
  });

  it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });
});
