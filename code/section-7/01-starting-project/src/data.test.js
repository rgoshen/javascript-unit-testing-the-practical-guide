import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData() ', () => {
  it('should exeute logFn if provided', () => {
    const logger = vi.fn(); //spy function

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
  });
});
