import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData() ', () => {
  it('should exeute logFn if provided', () => {
    const logger = vi.fn(); //spy function

    logger.mockImplementation(() => {}); //mock function that will replace the logger mock from line 6 above
    // if used with mockImplementationOnce(), it will only be called once and then go back to the original implementation from line 6 above

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
  });
});
